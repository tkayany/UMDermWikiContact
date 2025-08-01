# Overview

This is a password-protected web application with a hybrid architecture supporting both full-stack and static deployment modes. The application features a clean, modern design with collapsible content sections that can be dynamically created, edited, and deleted. In full-stack mode, content is stored persistently in a PostgreSQL database. In static deployment mode, it automatically falls back to localStorage for data persistence. The application includes both a Node.js/Express backend with database integration and a responsive HTML frontend with smart deployment detection and fallback capabilities.

# Recent Changes (Updated: 2025-08-01)

## Deployment Compatibility Fixes
- **Enhanced Static Deployment Support**: Modified the application to automatically detect deployment environment (static vs full-stack)
- **API Availability Detection**: Added `checkAPIAvailability()` function to determine if backend API is accessible
- **Graceful Fallback System**: Implemented localStorage fallback when database API is unavailable
- **Build Process**: Created build script (`build.sh`) and ensured `index.html` is copied to `dist` directory
- **Dual-Mode Functionality**: All features (edit, save, add sections, delete sections) now work in both modes

## Architecture Improvements
- **Smart Data Persistence**: Database operations with automatic localStorage fallback
- **Error Handling**: Enhanced error handling for network failures and API unavailability
- **User Feedback**: Clear messaging to indicate data storage mode (database vs local storage)
- **Deployment Flexibility**: Compatible with both Autoscale (full-stack) and Static deployment types

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Backend Architecture
- **Node.js/Express Server**: RESTful API server handling database operations and serving static content
- **PostgreSQL Database**: Persistent storage for content sections using Drizzle ORM for type-safe database operations
- **TypeScript Implementation**: Full TypeScript setup with compilation to JavaScript for runtime
- **Database Schema**: Single table for content sections with fields for heading, content, collapsed state, and ordering

## Frontend Architecture
- **Password Protection**: Client-side password validation with "derm2025" as the access key
- **Dynamic Content Management**: JavaScript-powered interface for creating, editing, and deleting content sections
- **Collapsible Sections**: Interactive headers that can be expanded/collapsed with state persistence
- **Edit Mode**: Toggle-able editing interface with save/cancel functionality
- **Responsive Design**: Mobile-first design using flexbox and modern CSS practices

## API Endpoints
- **GET /api/sections**: Retrieve all content sections from database
- **POST /api/sections**: Create new content section
- **PUT /api/sections/:id**: Update existing section (content, heading, or collapsed state)
- **DELETE /api/sections/:id**: Remove section from database

## Database Integration
- **Drizzle ORM**: Type-safe database operations with schema management
- **Auto-initialization**: Default sections created automatically on first run
- **Real-time Persistence**: All changes immediately saved to PostgreSQL database

# External Dependencies

## Backend Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity optimized for serverless environments
- **drizzle-orm**: Type-safe ORM for database operations with PostgreSQL support
- **drizzle-kit**: CLI tool for database schema management and migrations
- **express**: Web application framework for Node.js handling HTTP requests and routing
- **cors**: Cross-Origin Resource Sharing middleware for API access
- **typescript**: TypeScript compiler for type-safe JavaScript development
- **ws**: WebSocket library required for Neon database connections

## Frontend Dependencies
- **None**: Frontend uses vanilla HTML5, CSS3, and JavaScript with no external libraries
- **Browser APIs**: Relies on modern browser features including Fetch API for database communication
- **System Fonts**: Uses native system font stack for optimal performance across platforms

## Database Infrastructure
- **PostgreSQL Database**: Persistent storage hosted on Replit's database service
- **Automatic Initialization**: Database schema and default content created automatically on first run
- **Environment Variables**: Database connection configured through Replit's environment system