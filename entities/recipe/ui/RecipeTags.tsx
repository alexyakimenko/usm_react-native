import { ScrollView, Text, View } from 'react-native';

export const RecipeTags = ({ tags }: { tags: string }) => {
  return (
    <ScrollView horizontal showsVerticalScrollIndicator={false}>
      <View className="my-1 flex-row gap-4">
        {tags.split(' ').map((tag, i) => {
          const name = tag.trim();
          if (!name) return null;

          return (
            <Text key={i} className="rounded bg-rose-900 px-2 py-1 text-white">
              {name}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
};
