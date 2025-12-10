import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import MigrationProvider from '@/app/providers/MigrationProvider';
import CategorySeedProvider from '@/app/providers/CategorySeedProvider';

export default function RootLayout() {
  return (
    <MigrationProvider>
      <CategorySeedProvider>
        <StatusBar hidden />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </CategorySeedProvider>
    </MigrationProvider>
  );
}
