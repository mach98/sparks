import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QuizStackNavigatorParamList } from '../domain/models/navigation';
import { ROUTES } from './routes';
import ResultsScreen from '../screens/Quiz/ResultsScreen';
import QuizScreen from '../screens/Quiz/QuizScreen';
import QuizDetailsScreen from '../screens/Quiz/QuizDetailsScreen';
import QuizCategoriesListScreen from '../screens/Quiz/QuizCategoriesListScreen';

const Stack = createNativeStackNavigator<QuizStackNavigatorParamList>();

export const QuizStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.Quiz} component={QuizScreen} />
      <Stack.Screen
        name={ROUTES.QuizCategories}
        component={QuizCategoriesListScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen name={ROUTES.QuizDetails} component={QuizDetailsScreen} />
      <Stack.Screen name={ROUTES.Results} component={ResultsScreen} />
    </Stack.Navigator>
  );
};
