import { TextProps, Text } from 'react-native';
import cn from '@/shared/lib/cn';

const ThemedText = ({ className, ...rest }: TextProps) => {
  return (
    <Text
      className={cn('text-zinc-950 dark:text-white', className)}
      {...rest}
    />
  );
};

export default ThemedText;
