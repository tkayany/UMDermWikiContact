import { db } from './db';
import { contentSections, type ContentSection, type InsertContentSection } from '../shared/schema';
import { eq, asc } from 'drizzle-orm';

// Get all content sections
export async function getContentSections(): Promise<ContentSection[]> {
  return await db.select().from(contentSections).orderBy(asc(contentSections.sortOrder));
}

// Create a new content section
export async function createContentSection(data: Omit<InsertContentSection, 'id' | 'createdAt' | 'updatedAt'>): Promise<ContentSection> {
  const [section] = await db.insert(contentSections).values({
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  }).returning();
  return section;
}

// Update a content section
export async function updateContentSection(sectionId: string, updates: Partial<Pick<ContentSection, 'heading' | 'content' | 'isCollapsed'>>): Promise<ContentSection | undefined> {
  const [section] = await db.update(contentSections)
    .set({
      ...updates,
      updatedAt: new Date(),
    })
    .where(eq(contentSections.sectionId, sectionId))
    .returning();
  return section;
}

// Delete a content section
export async function deleteContentSection(sectionId: string): Promise<boolean> {
  const result = await db.delete(contentSections)
    .where(eq(contentSections.sectionId, sectionId));
  return (result.rowCount ?? 0) > 0;
}

// Initialize default sections if database is empty
export async function initializeDefaultSections(): Promise<void> {
  const existingSections = await getContentSections();
  if (existingSections.length === 0) {
    await createContentSection({
      sectionId: '1',
      heading: 'Provider Contact Info',
      content: 'Welcome to our secure provider portal. Here you can find important contact information and resources for healthcare providers. This information is confidential and should only be accessed by authorized personnel. Please contact our support team if you need additional assistance or have any questions regarding the services provided.',
      isCollapsed: false,
      sortOrder: 1,
    });
    
    await createContentSection({
      sectionId: '2',
      heading: 'Additional Information',
      content: 'This section can be customized to include any additional information relevant to your organization. Use the edit mode to modify content as needed. All changes are now saved to the database.',
      isCollapsed: false,
      sortOrder: 2,
    });
  }
}