import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorParamList } from '../domain/models/navigation';
import { ROUTES } from './routes';
import { HomeStackNavigator } from './HomeStack.navigator';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={ROUTES.HomeStack}
        component={HomeStackNavigator}
        options={{ title: 'Home' }}
      />
      <Tab.Screen name={ROUTES.Settings} component={SettingsScreen} />
    </Tab.Navigator>
  );
};
