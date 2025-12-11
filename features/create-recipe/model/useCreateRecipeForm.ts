import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import createRecipeSchema from '@/features/create-recipe/lib/schema';

const useCreateRecipeForm = () =>
  useForm({
    resolver: yupResolver(createRecipeSchema),
  });

export default useCreateRecipeForm;
