import React from 'react';
import RecipeImage from '@/entities/recipe/ui/RecipeImage';
import useRecipe from '@/entities/recipe/model/useRecipe';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import noImage from '@/shared/lib/no-image';
import { View } from 'react-native';
import ThemedText from '@/shared/ui/ThemedText';
import CategoryBadge from '@/entities/category/ui/CategoryBadge';
import { ChecklistSection } from '@/shared/ui/ChecklistSection';
import { RecipeTags } from '@/entities/recipe/ui/RecipeTags';

const RecipeDetails = ({ id }: { id: number }) => {
  const recipe = useRecipe(id);
  const insets = useSafeAreaInsets();

  if (!recipe) return null;

  return (
    <>
      <RecipeImage uri={recipe.image ?? noImage} />

      <View
        style={{
          marginTop: 8,
          gap: 8,
          paddingInline: 8,
          marginBottom: insets.bottom,
        }}
      >
        <ThemedText className="text-3xl font-bold">{recipe.title}</ThemedText>

        <CategoryBadge categoryId={recipe.categoryId} />

        <ThemedText className="opacity-70">{recipe.description}</ThemedText>

        <ChecklistSection
          title={'Ingredients'}
          items={recipe.ingredients.split('\n')}
        />

        <ChecklistSection title={'Steps'} items={recipe.steps.split('\n')} />

        <View className="mt-2 rounded bg-gray-300 p-4 dark:bg-[#ffffff07]">
          <RecipeTags tags={recipe.tags} />
        </View>
      </View>
    </>
  );
};

export default RecipeDetails;
