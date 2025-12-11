// src/shared/ui/checklist/ChecklistSection.tsx

import { View } from 'react-native';
import ThemedText from '@/shared/ui/ThemedText';
import LabeledCheckbox from '@/shared/ui/LabeledCheckbox';

interface ChecklistSectionProps {
  title: string;
  items: string[];
}

export const ChecklistSection = ({ title, items }: ChecklistSectionProps) => {
  return (
    <View className="rounded bg-gray-300 p-4 dark:bg-[#ffffff07]">
      <ThemedText className="text-2xl font-bold">{title}</ThemedText>

      <View className="mt-2 gap-2">
        {items.map((item, index) => {
          const name = item.trim();
          if (!name) return null;

          return <LabeledCheckbox key={index} label={name} />;
        })}
      </View>
    </View>
  );
};
