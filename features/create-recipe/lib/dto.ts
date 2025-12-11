export interface CreateRecipeDTO {
  title: string;
  ingredients: string;
  description: string;
  steps: string;
  tags: string;
  categoryId: number;
  image: string | null;
}
