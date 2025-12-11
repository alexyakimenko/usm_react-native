import React, { useMemo, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Image, View, TouchableOpacity, Text } from 'react-native';
import ThemedText from '@/shared/ui/ThemedText';
import db from '@/shared/api/db/client';
import * as schemas from '@/shared/api/db/schema';
import { eq } from 'drizzle-orm';
import useCategories from '@/entities/category/model/useCategories';
import { Checkbox } from 'expo-checkbox';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LabeledCheckbox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <TouchableOpacity onPress={() => setChecked((checked) => !checked)}>
      <View className={'flex-row items-center gap-4'}>
        <Checkbox
          value={checked}
          onValueChange={setChecked}
          color={checked ? 'green' : 'red'}
          style={{
            borderRadius: 5,
          }}
        />
        <ThemedText className={'text-xl'}>{label}</ThemedText>
      </View>
    </TouchableOpacity>
  );
};

const RecipePage = () => {
  const insets = useSafeAreaInsets();

  const params = useLocalSearchParams();
  const recipe = db
    .select()
    .from(schemas.recipe)
    .where(eq(schemas.recipe.id, Number(params.id)))
    .get();

  const { categories } = useCategories();

  const category = useMemo(
    () => categories.find((c) => c.id === recipe?.categoryId),
    [recipe, categories],
  );

  if (!recipe) {
    return;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {recipe.image && (
        <Image
          source={{ uri: recipe.image }}
          className={'aspect-square w-full'}
        />
      )}
      <View
        style={{
          marginTop: 8,
          gap: 8,
          paddingInline: 8,
          marginBottom: insets.bottom,
        }}
      >
        <ThemedText className={'text-3xl font-bold'}>{recipe.title}</ThemedText>
        {category && (
          <ThemedText className={'text-xl opacity-50'}>
            {category.icon} {category.name}
          </ThemedText>
        )}
        <ThemedText className={'opacity-70'}>{recipe.description}</ThemedText>
        <View className={'rounded bg-gray-300 p-4 dark:bg-[#ffffff07]'}>
          <ThemedText className={'text-2xl font-bold'}>Ingredients</ThemedText>
          <View className={'mt-2 gap-2'}>
            {recipe.ingredients.split('\n').map((ingredient, index) => {
              const name = ingredient.trim();
              if (!name) return;

              return <LabeledCheckbox label={name} key={index} />;
            })}
          </View>
        </View>
        <View className={'mt-2 rounded bg-gray-300 p-4 dark:bg-[#ffffff07]'}>
          <ThemedText className={'text-2xl font-bold'}>Steps</ThemedText>
          <View className={'mt-2 gap-2'}>
            {recipe.steps.split('\n').map((step, index) => {
              const name = step.trim();
              if (!name) return;

              return <LabeledCheckbox label={name} key={index} />;
            })}
          </View>
        </View>
        <View className={'mt-2 rounded bg-gray-300 p-4 dark:bg-[#ffffff07]'}>
          <View className={'my-1 flex-row gap-4'}>
            {recipe.tags.split(' ').map((tag, index) => {
              const name = tag.trim();
              if (!name) return;

              return (
                <Text
                  key={index}
                  className={'rounded bg-rose-900 px-2 py-1 text-white'}
                >
                  {name}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipePage;
