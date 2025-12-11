import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

const pickImage = async () => {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permission.granted) {
    Alert.alert(
      'Permission required',
      'Permission to access the media library is required.',
    );
    return null;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
  });

  if (result.canceled) return null;

  return result.assets[0].uri;
};

export default pickImage;
