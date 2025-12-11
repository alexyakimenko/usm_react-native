import db from '@/shared/api/db/client';
import * as schemas from '@/shared/api/db/schema';
import { eq } from 'drizzle-orm';

const useRecipe = (id: number) => {
  return db
    .select()
    .from(schemas.recipe)
    .where(eq(schemas.recipe.id, id))
    .get();
};

export default useRecipe;
