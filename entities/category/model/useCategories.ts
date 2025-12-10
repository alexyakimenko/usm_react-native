import db from '@/shared/api/db/client';
import * as schemas from '@/shared/api/db/schema';
import { useState } from 'react';
import { type Category } from '@/entities/category/model/types';

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  db.select()
    .from(schemas.category)
    .then((result) => setCategories(result));

  return { categories };
};

export default useCategories;
