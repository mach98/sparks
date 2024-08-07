import {
  FontAwesome5,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
  Entypo,
} from '@expo/vector-icons';

export const getIcons = (category: string) => {
  switch (category) {
    case 'Math':
      return <MaterialCommunityIcons name='math-compass' size={30} />;
    case 'Chemistry':
      return <SimpleLineIcons name='chemistry' size={30} />;
    case 'Biology':
      return <FontAwesome5 name='microscope' size={30} />;
    case 'History':
      return <Ionicons name='time-outline' size={30} />;
    case 'English':
      return <MaterialCommunityIcons name='alphabetical-variant' size={30} />;
    case 'Geography':
      return <Entypo name='map' size={30} />;
    case 'Physics':
      return <Entypo name='ruler' size={30} />;
    default:
      break;
  }
};
