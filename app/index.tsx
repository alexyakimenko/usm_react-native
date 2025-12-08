import { Text, View } from 'react-native';
import '@/global.css';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-xl font-bold text-white">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
