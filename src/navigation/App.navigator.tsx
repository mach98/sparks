import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../domain/models/navigation';
import { ROUTES } from './routes';
import { BottomTabNavigator } from './BottomTab.navigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ROUTES.BottomTab} component={BottomTabNavigator} />
  </Stack.Navigator>
);
