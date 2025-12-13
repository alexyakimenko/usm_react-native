import ThemedText from '@/shared/ui/ThemedText';
import useCategories from '@/entities/category/model/useCategories';

const CategoryBadge = ({ categoryId }: { categoryId: number }) => {
  const { categories } = useCategories();

  const category = categories.find((c) => c.id === categoryId);

  if (!category) return null;

  return (
    <ThemedText className="text-xl opacity-50">
      {category.icon} {category.name}
    </ThemedText>
  );
};

export default CategoryBadge;
