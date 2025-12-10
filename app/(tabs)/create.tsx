import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreateRecipeForm from '@/features/create-recipe/ui/CreateRecipeForm';

const Create = () => {
  return (
    <View className="flex-1 bg-white px-4 dark:bg-black">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <Text className="mt-4 text-3xl font-bold text-slate-950 dark:text-white">
            Create Recipe
          </Text>

          <CreateRecipeForm />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Create;
