import * as SQLite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';

const expo = SQLite.openDatabaseSync('test.db', { enableChangeListener: true });

const db = drizzle(expo);

export default db;
