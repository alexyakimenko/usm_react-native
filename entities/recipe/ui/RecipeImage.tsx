import { Image } from 'react-native';

const RecipeImage = ({ uri }: { uri: string }) => {
  return <Image source={{ uri }} className="aspect-square w-full" />;
};

export default RecipeImage;
