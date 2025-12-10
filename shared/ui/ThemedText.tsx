import { TextProps, Text } from 'react-native';
const ThemedText = (props: TextProps) => {
  return (
    <Text
      {...props}
      className={`text-zinc-950 dark:text-white ${props.className}`}
    />
  );
};

export default ThemedText;
