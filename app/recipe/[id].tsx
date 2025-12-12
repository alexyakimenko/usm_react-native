import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';
import ThemedText from '@/shared/ui/ThemedText';
import useCategories from '@/entities/category/model/useCategories';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useRecipe from '@/entities/recipe/model/useRecipe';
import RecipeImage from '@/entities/recipe/ui/RecipeImage';
import CategoryBadge from '@/entities/category/ui/CategoryBadge';
import { ChecklistSection } from '@/shared/ui/ChecklistSection';
import { RecipeTags } from '@/entities/recipe/ui/RecipeTags';
import noImage from '@/shared/lib/no-image';

const RecipePage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();

  const recipe = useRecipe(Number(id));
  const { categories } = useCategories();

  const category = categories.find((c) => c.id === recipe?.categoryId);

  if (!recipe) return null;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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

        {category && <CategoryBadge category={category} />}

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
    </ScrollView>
  );
};

export default RecipePage;
