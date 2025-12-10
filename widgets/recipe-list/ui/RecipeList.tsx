import { View, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Recipe } from '@/entities/recipe/model/types';
import { Category } from '@/entities/category/model/types';
import ThemedText from '@/shared/ui/ThemedText';
import RecipeCard from '@/entities/recipe/ui/RecipeCart';

const RecipeList = ({
  recipes,
  categories,
}: {
  recipes: Recipe[];
  categories: Category[];
}) => {
  return (
    <View className="flex-1 bg-white px-2 dark:bg-black">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <ThemedText className="mt-4 text-3xl font-bold">
            Your Recipes
          </ThemedText>

          <FlatList
            data={recipes}
            renderItem={({ item }) => (
              <RecipeCard data={item} categories={categories} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'center',
              gap: 8,
            }}
            style={{ marginTop: 32 }}
            scrollEnabled={false}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default RecipeList;
