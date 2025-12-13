import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native';
import RecipeDetails from '@/widgets/recipe-details/ui/RecipeDetails';

const RecipePage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <RecipeDetails id={Number(id)} />
    </ScrollView>
  );
};

export default RecipePage;
