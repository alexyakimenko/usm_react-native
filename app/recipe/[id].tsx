import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const RecipePage = () => {
  const params = useLocalSearchParams();

  return (
    <View>
      <Text>{params.id}</Text>
    </View>
  );
};

export default RecipePage;
