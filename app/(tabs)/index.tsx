import '@/global.css';
import { View, Text } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-slate-950">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
