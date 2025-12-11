import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreateRecipeForm from '@/features/create-recipe/ui/CreateRecipeForm';
import ThemedText from '@/shared/ui/ThemedText';

const Create = () => {
  return (
    <View className="flex-1 bg-white px-4 dark:bg-black">
      <KeyboardAvoidingView behavior={'padding'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView>
            <ThemedText className="mt-4 text-3xl font-bold">
              Create Recipe
            </ThemedText>

            <CreateRecipeForm />
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Create;
