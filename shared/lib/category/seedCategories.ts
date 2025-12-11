import db from '@/shared/api/db/client';
import * as schemas from '@/shared/api/db/schema';

export async function seedCategories() {
  await db.delete(schemas.category);

  await db.insert(schemas.category).values([
    { id: 1, name: 'Breakfast', icon: '🍳' },
    { id: 2, name: 'Lunch', icon: '🥪' },
    { id: 3, name: 'Dinner', icon: '🍽️' },
    { id: 4, name: 'Dessert', icon: '🍰' },
    { id: 5, name: 'Snacks', icon: '🍪' },
  ]);
}
