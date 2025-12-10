import { TouchableOpacity, Image, Text } from 'react-native';
import pickImage from '@/shared/lib/image/pickImage';
import React from 'react';

interface ImagePickerFieldProps {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImagePickerField = ({ image, setImage }: ImagePickerFieldProps) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        const uri = await pickImage();

        setImage(uri);
      }}
      className="items-center rounded bg-gray-300 p-1 dark:bg-[#ffffff05]"
    >
      {!image ? (
        <Text className="m-3 font-bold text-gray-500">Choose Image</Text>
      ) : (
        <Image source={{ uri: image }} className="h-30 w-full rounded" />
      )}
    </TouchableOpacity>
  );
};

export default ImagePickerField;
