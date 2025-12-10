import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import db from '@/shared/api/db/client';
import * as schemas from '@/shared/api/db/schema';
import useCategories from '@/entities/category/model/useCategories';
import RecipeList from '@/widgets/recipe-list/ui/RecipeList';

export default function Index() {
  const { data: recipes } = useLiveQuery(db.select().from(schemas.recipe));
  const { categories } = useCategories();

  return <RecipeList recipes={recipes} categories={categories} />;
}
