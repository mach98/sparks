import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './routes';
import { HomeStackNavigatorParamList } from '../domain/models/navigation';
import HomeScreen from '../screens/Home/HomeScreen';
import { QuizStackNavigator } from './QuizStack.Navigator';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
      <Stack.Screen name={ROUTES.QuizStack} component={QuizStackNavigator} />
    </Stack.Navigator>
  );
};
