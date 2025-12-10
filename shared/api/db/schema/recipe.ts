import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { categoryTable } from '@/shared/api/db/schema/category';

export const recipeTable = sqliteTable('recipes', {
  id: int().primaryKey({ autoIncrement: true }),
  categoryId: int('category_id').references(() => categoryTable.id),
  ingredients: text().notNull(),
  description: text(),
  steps: text().notNull(),
  tags: text().notNull(),
  likes: int().default(0),
  dislikes: int().default(0),
});
