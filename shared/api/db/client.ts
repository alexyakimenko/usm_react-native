import * as SQLite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';

const expo = SQLite.openDatabaseSync(
  `${process.env.EXPO_PUBLIC_DATABASE_NAME ?? 'db'}.db`,
  {
    enableChangeListener: true,
  },
);

const db = drizzle(expo);

export default db;
