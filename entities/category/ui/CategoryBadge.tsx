import ThemedText from '@/shared/ui/ThemedText';
import { Category } from '../model/types';

const CategoryBadge = ({ category }: { category: Category }) => {
  return (
    <ThemedText className="text-xl opacity-50">
      {category.icon} {category.name}
    </ThemedText>
  );
};

export default CategoryBadge;
