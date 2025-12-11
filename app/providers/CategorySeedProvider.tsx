import { ReactNode, useEffect } from 'react';
import { seedCategories } from '@/shared/lib/category/seedCategories';

const CategorySeedProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    (async () => {
      await seedCategories();
    })();
  }, []);

  return <>{children}</>;
};

export default CategorySeedProvider;
