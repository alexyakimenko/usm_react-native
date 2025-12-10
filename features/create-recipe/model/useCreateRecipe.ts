import db from '@/shared/api/db/client';
import * as schemas from '@/shared/api/db/schema';
import { CreateRecipeDTO } from '@/features/create-recipe/lib/dto';

function useCreateRecipe() {
  async function createRecipe(dto: CreateRecipeDTO) {
    await db.insert(schemas.recipe).values(dto);
  }

  return { createRecipe };
}

export default useCreateRecipe;
