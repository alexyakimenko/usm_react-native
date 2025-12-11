export interface Recipe {
  id: number;
  title: string;
  categoryId: number;
  description: string | null;
  dislikes: number;
  likes: number;
  image: string | null;
  ingredients: string;
  steps: string;
  tags: string;
}
