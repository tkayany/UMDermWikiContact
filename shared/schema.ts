import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Content sections table
export const contentSections = pgTable('content_sections', {
  id: serial('id').primaryKey(),
  sectionId: text('section_id').notNull(),
  heading: text('heading').notNull(),
  content: text('content').notNull(),
  isCollapsed: boolean('is_collapsed').default(false),
  sortOrder: serial('sort_order'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type ContentSection = typeof contentSections.$inferSelect;
export type InsertContentSection = typeof contentSections.$inferInsert;