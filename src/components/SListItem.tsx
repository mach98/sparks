import { FC } from 'react';
import { Quiz } from '../domain/models/Quiz';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../themes/colors';

const ListItem: FC<{ item: Quiz }> = ({ item }) => {
  //   const addIcon = (category: string) => {
  //     switch (category) {
  //       case 'Science':
  //         return <MaterialIcons name='science' color={COLORS.black} size={30} />;
  //         case 'History':
  //             return <Ionicons name='time-outline' size={25} />
  //         case
  //       default:
  //         break;
  //     }
  //   };
  return (
    <TouchableOpacity className='bg-gray-400 border my-2 p-2'>
      <Text>{item.category}</Text>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );
};
