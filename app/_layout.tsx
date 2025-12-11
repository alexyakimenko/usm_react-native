import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import MigrationProvider from '@/app/providers/MigrationProvider';
import CategorySeedProvider from '@/app/providers/CategorySeedProvider';
import { useColorScheme } from 'react-native';
import '@/global.css';

export default function RootLayout() {
  const colorscheme = useColorScheme();

  return (
    <MigrationProvider>
      <CategorySeedProvider>
        <StatusBar hidden />
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: colorscheme === 'dark' ? 'black' : 'white',
            },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="recipe/[id]" options={{ headerShown: false }} />
        </Stack>
      </CategorySeedProvider>
    </MigrationProvider>
  );
}
