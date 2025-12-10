import db from '@/shared/api/db/client';
import * as schemas from '@/shared/api/db/schema';
import { useEffect, useState } from 'react';
import { type Category } from '@/entities/category/model/types';

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    db.select()
      .from(schemas.category)
      .then((result) => setCategories(result));
  }, []);

  return { categories };
};

export default useCategories;
