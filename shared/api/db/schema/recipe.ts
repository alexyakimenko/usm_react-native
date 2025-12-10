import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { category } from '@/shared/api/db/schema/category';

export const recipe = sqliteTable('recipes', {
  id: int().primaryKey({ autoIncrement: true }),
  categoryId: int('category_id').references(() => category.id),
  title: text().notNull(),
  image: text(),
  ingredients: text().notNull(),
  description: text(),
  steps: text().notNull(),
  tags: text().notNull(),
  likes: int().default(0),
  dislikes: int().default(0),
});
