import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const testTable = sqliteTable('test_table', {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
});
