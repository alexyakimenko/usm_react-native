import { Control, FieldError, useController } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import React from 'react';

interface InputProps extends TextInputProps {
  name: string;
  title: string;
  control: Control<any>;
  error?: FieldError;
}

const Input = ({ name, title, control, error, ...rest }: InputProps) => {
  const { field } = useController({
    control,
    name,
  });

  return (
    <View>
      <View className={'flex-row justify-between'}>
        <Text className={'text-md font-bold dark:text-gray-500'}>{title}</Text>
        {error && <Text className={'text-red-900'}>{error.message}</Text>}
      </View>
      <TextInput
        className={
          'mt-2 rounded bg-gray-300 p-4 dark:bg-[#ffffff05] dark:text-white'
        }
        value={field.value}
        onChangeText={field.onChange}
        {...rest}
      />
    </View>
  );
};

export default Input;
