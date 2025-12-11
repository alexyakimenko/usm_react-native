import { View, ImageBackground, Text, useColorScheme } from 'react-native';
import { Fragment, useMemo } from 'react';
import { Recipe } from '../model/types';
import { Category } from '@/entities/category/model/types';
import ThemedText from '@/shared/ui/ThemedText';
import { Link } from 'expo-router';

const RecipeCard = ({
  data,
  categories,
}: {
  data: Recipe;
  categories: Category[];
}) => {
  const colorScheme = useColorScheme();
  const category = useMemo(
    () => categories.find((c) => c.id === data.categoryId),
    [data, categories],
  );

  return (
    <Link
      href={{
        pathname: '/recipe/[id]',
        params: {
          id: data.id,
        },
      }}
      style={{
        width: '47%',
        height: 250,
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: colorScheme === 'dark' ? '#ffffff05' : '#e5e7eb',
      }}
      asChild={true}
    >
      <View className="h-full">
        {data.image && (
          <ImageBackground className="h-30 w-full" source={{ uri: data.image }}>
            <View className="items-end gap-1 p-2">
              {data.tags
                .split(' ')
                .slice(0, 3)
                .map((tag, index) => (
                  <Fragment key={index}>
                    <Text className="rounded bg-rose-900 px-1 text-white/70">
                      {tag}
                    </Text>
                  </Fragment>
                ))}
            </View>
          </ImageBackground>
        )}

        <View className="mt-2 gap-2 px-3 py-1">
          {category && (
            <View className="flex-row justify-between opacity-50">
              <ThemedText>{`${category.icon} ${category.name}`}</ThemedText>

              {/*<View className="flex-row gap-2">*/}
              {/*  <View className="flex-row items-center gap-1">*/}
              {/*    <AntDesign name="up" color="#00a63e" />*/}
              {/*    <Text className="text-green-600">{data.likes}</Text>*/}
              {/*  </View>*/}

              {/*  <View className="flex-row items-center gap-1">*/}
              {/*    <AntDesign name="down" color="#e7000b" />*/}
              {/*    <Text className="text-red-600">{data.dislikes}</Text>*/}
              {/*  </View>*/}
              {/*</View>*/}
            </View>
          )}

          <ThemedText className="font-bold">{data.title}</ThemedText>
          <ThemedText numberOfLines={3}>{data.description}</ThemedText>
        </View>
        <ThemedText className="my-2 mt-auto px-3 opacity-50">
          Show more
        </ThemedText>
      </View>
    </Link>
  );
};

export default RecipeCard;
