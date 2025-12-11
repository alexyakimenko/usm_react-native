import * as yup from 'yup';

const createRecipeSchema = yup.object().shape({
  title: yup.string().trim().required(),
  ingredients: yup.string().trim().required(),
  description: yup.string().trim().required(),
  steps: yup.string().trim().required(),
  tags: yup.string().trim().required(),
});

export default createRecipeSchema;
