import { Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

interface SButtonProps {
  onPress: () => void;
  title: string;
  borderRadius?: string;
}

const SButton: FC<SButtonProps> = ({
  onPress,
  title,
  borderRadius = 'rounded-lg',
}) => {
  return (
    <TouchableOpacity
      className={`bg-white px-5 py-3 ${borderRadius} w-3/4`}
      onPress={onPress}
    >
      <Text className='text-center text-lg font-semibold text-primary'>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SButton;
