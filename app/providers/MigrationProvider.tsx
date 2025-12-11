import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import db from '@/shared/api/db/client';
import migrations from '@/shared/api/db/migrations/migrations';
import { Text } from 'react-native';
import { ReactNode } from 'react';

const MigrationProvider = ({ children }: { children: ReactNode }) => {
  const { success, error } = useMigrations(db, migrations);

  if (error) {
    return <Text>Migration error: {error.message}</Text>;
  }

  if (!success) {
    return <Text>Migration is in progress...</Text>;
  }

  return <>{children}</>;
};

export default MigrationProvider;
