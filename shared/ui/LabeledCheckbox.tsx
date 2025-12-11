import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import ThemedText from '@/shared/ui/ThemedText';

const LabeledCheckbox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity onPress={() => setChecked((value) => !value)}>
      <View className="flex-row items-center gap-4">
        <Checkbox
          value={checked}
          onValueChange={setChecked}
          color={checked ? 'green' : 'red'}
          style={{ borderRadius: 5 }}
        />
        <ThemedText className="text-xl">{label}</ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default LabeledCheckbox;
