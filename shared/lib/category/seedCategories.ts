import db from '@/shared/api/db/client';
import * as schemas from '@/shared/api/db/schema';

export async function seedCategories() {
  await db.delete(schemas.category);

  await db.insert(schemas.category).values([
    { name: 'Breakfast', icon: '🍳' },
    { name: 'Lunch', icon: '🥪' },
    { name: 'Dinner', icon: '🍽️' },
    { name: 'Dessert', icon: '🍰' },
    { name: 'Snacks', icon: '🍪' },
  ]);
}
