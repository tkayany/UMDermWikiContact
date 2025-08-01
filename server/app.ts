import express from 'express';
import cors from 'cors';
import path from 'path';
import { getContentSections, createContentSection, updateContentSection, deleteContentSection, initializeDefaultSections } from './api';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..')));

// Initialize database with default sections
initializeDefaultSections().catch(console.error);

// API Routes
app.get('/api/sections', async (req, res) => {
  try {
    const sections = await getContentSections();
    res.json(sections);
  } catch (error) {
    console.error('Error fetching sections:', error);
    res.status(500).json({ error: 'Failed to fetch sections' });
  }
});

app.post('/api/sections', async (req, res) => {
  try {
    const { sectionId, heading, content, isCollapsed = false, sortOrder } = req.body;
    const section = await createContentSection({
      sectionId,
      heading,
      content,
      isCollapsed,
      sortOrder,
    });
    res.json(section);
  } catch (error) {
    console.error('Error creating section:', error);
    res.status(500).json({ error: 'Failed to create section' });
  }
});

app.put('/api/sections/:sectionId', async (req, res) => {
  try {
    const { sectionId } = req.params;
    const updates = req.body;
    const section = await updateContentSection(sectionId, updates);
    if (section) {
      res.json(section);
    } else {
      res.status(404).json({ error: 'Section not found' });
    }
  } catch (error) {
    console.error('Error updating section:', error);
    res.status(500).json({ error: 'Failed to update section' });
  }
});

app.delete('/api/sections/:sectionId', async (req, res) => {
  try {
    const { sectionId } = req.params;
    const deleted = await deleteContentSection(sectionId);
    if (deleted) {
      res.json({ message: 'Section deleted successfully' });
    } else {
      res.status(404).json({ error: 'Section not found' });
    }
  } catch (error) {
    console.error('Error deleting section:', error);
    res.status(500).json({ error: 'Failed to delete section' });
  }
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;