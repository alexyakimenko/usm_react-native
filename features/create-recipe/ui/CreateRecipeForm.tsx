import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useCreateRecipeForm from '@/features/create-recipe/model/useCreateRecipeForm';
import useCreateRecipe from '@/features/create-recipe/model/useCreateRecipe';
import { useEffect, useState } from 'react';
import InputField from '@/features/create-recipe/ui/InputField';
import ImagePickerField from '@/features/create-recipe/ui/ItemPickerField';
import useCategories from '@/entities/category/model/useCategories';
import saveImage from '@/shared/lib/image/saveImage';

const CreateRecipeForm = () => {
  const { control, handleSubmit, reset, formState } = useCreateRecipeForm();
  const { createRecipe } = useCreateRecipe();
  const { categories } = useCategories();

  const [image, setImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const onSubmit = handleSubmit(async (data) => {
    await createRecipe({
      ...data,
      categoryId: selectedCategory,
      image: image ? saveImage(image) : null,
    });

    reset();
    setImage(null);
  });

  return (
    <View className="mt-8 rounded-xl bg-gray-200 px-8 pb-8 dark:bg-zinc-950">
      <Picker
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
      >
        {categories.map((category) => (
          <Picker.Item
            key={category.id}
            label={`${category.icon} ${category.name}`}
            value={category.id}
          />
        ))}
      </Picker>

      <View className="gap-4">
        <InputField
          name="title"
          title="Title"
          control={control}
          error={formState.errors.title}
        />
        <InputField
          name="description"
          title="Description"
          control={control}
          multiline
          error={formState.errors.description}
        />
        <InputField
          name="ingredients"
          title="Ingredients"
          control={control}
          multiline
          error={formState.errors.ingredients}
        />
        <InputField
          name="steps"
          title="Steps"
          control={control}
          multiline
          error={formState.errors.steps}
        />
        <InputField
          name="tags"
          title="Tags"
          control={control}
          multiline
          error={formState.errors.tags}
        />

        <ImagePickerField image={image} setImage={setImage} />
      </View>

      <TouchableOpacity
        onPress={onSubmit}
        className="mt-8 rounded bg-green-800 px-4 py-2"
      >
        <Text className="text-center text-xl font-bold text-white">Create</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateRecipeForm;
