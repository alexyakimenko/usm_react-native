import React from 'react';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: 'transparent',
          backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
        },
        animation: 'shift',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={
                colorScheme === 'dark'
                  ? focused
                    ? 'lightblue'
                    : 'white'
                  : focused
                    ? 'black'
                    : 'gray'
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add"
              size={24}
              color={
                colorScheme === 'dark'
                  ? focused
                    ? 'lightblue'
                    : 'white'
                  : focused
                    ? 'black'
                    : 'gray'
              }
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
