import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const category = sqliteTable('categories', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  icon: text().notNull(),
});
