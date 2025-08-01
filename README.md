# UM DermWiki Contact Information System

A password-protected web application for managing dermatology clinic contact information with hybrid deployment support.

## Overview

This application provides a secure, password-protected interface for managing contact information for dermatology clinics. It features a modern, responsive design with collapsible content sections that can be dynamically created, edited, and deleted.

## Features

- **Password Protection**: Secure access with password "derm2025"
- **Hybrid Architecture**: Works in both full-stack (database) and static (localStorage) modes
- **Real-time Editing**: Toggle edit mode to modify content with save/cancel functionality
- **Collapsible Sections**: Expandable/collapsible content sections with state persistence
- **Responsive Design**: Mobile-friendly interface
- **Auto-detection**: Automatically detects deployment environment and switches between database and localStorage

## Deployment Modes

### Full-Stack Mode (Autoscale Deployment)
- Uses PostgreSQL database for persistent storage
- Real-time collaboration - changes visible to all users
- Complete CRUD operations (Create, Read, Update, Delete)
- Recommended for production use

### Static Mode (Static Deployment)
- Falls back to localStorage for data persistence
- Single-user experience per browser
- All functionality maintained with local storage
- Useful for development or single-user scenarios

## Tech Stack

**Backend:**
- Node.js with Express
- PostgreSQL database
- Drizzle ORM for type-safe database operations
- TypeScript for type safety

**Frontend:**
- Vanilla HTML5, CSS3, and JavaScript
- No external dependencies
- Modern browser features (Fetch API)

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up PostgreSQL database (provided via Replit)
4. Build the project: `./build.sh`
5. Start the server: `npm run dev`

## File Structure

```
├── server/           # Backend TypeScript files
│   ├── app.ts       # Express server setup
│   ├── api.ts       # API endpoints
│   ├── db.ts        # Database configuration
├── shared/          # Shared TypeScript definitions
│   └── schema.ts    # Database schema
├── dist/            # Compiled JavaScript output
├── index.html       # Frontend HTML file
├── build.sh         # Build script
└── README.md        # This file
```

## API Endpoints

- `GET /api/sections` - Retrieve all content sections
- `POST /api/sections` - Create new section
- `PUT /api/sections/:id` - Update existing section
- `DELETE /api/sections/:id` - Delete section

## Usage

1. Access the application
2. Enter password: `derm2025`
3. View contact information in collapsible sections
4. Click "Edit Mode" to modify content
5. Add new sections or delete existing ones
6. Save changes to persist data

## Current Content Sections

- **Dermatology Clinic Administrator**
- **Taubman Clinic** - Complete staff directory
- **Dominos Farms Clinic** - Address and staff contacts

## Security

- Client-side password protection
- Database credentials stored securely via environment variables
- CORS configured for API access

## Contributing

1. Make changes using the edit interface
2. Test in both deployment modes
3. Update documentation as needed

## License

Internal use for University of Michigan Dermatology Department.