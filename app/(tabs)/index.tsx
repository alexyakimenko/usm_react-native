import '@/global.css';
import { View, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '@/drizzle/migrations';
import { useEffect, useState } from 'react';
import { testTable } from '@/db/schema';

const expo = SQLite.openDatabaseSync('db.db');

const db = drizzle(expo);

export default function Index() {
  const { success } = useMigrations(db, migrations);
  const [items, setItems] = useState<(typeof testTable.$inferSelect)[] | null>(
    null,
  );

  useEffect(() => {
    if (!success) return;
    (async () => {
      await db.delete(testTable);

      await db.insert(testTable).values([
        {
          title: 'Test Item',
        },
      ]);

      const items = await db.select().from(testTable);
      setItems(items);
    })();
  }, [success]);

  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  if (items === null || items.length === 0) {
    return (
      <View>
        <Text>Empty</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-slate-950">
        Welcome to Nativewind!
      </Text>
      {items.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
}
