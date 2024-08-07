import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { ROUTES } from '../../navigation/routes';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

export type RootStackParamList = {
  [ROUTES.BottomTab]: NavigatorScreenParams<BottomTabNavigatorParamList>;
};

export type BottomTabNavigatorParamList = {
  [ROUTES.HomeStack]: NavigatorScreenParams<HomeStackNavigatorParamList>;
  [ROUTES.Settings]: undefined;
};

export type HomeStackNavigatorParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.QuizStack]: NavigatorScreenParams<QuizStackNavigatorParamList>;
};

export type QuizStackNavigatorParamList = {
  [ROUTES.Quiz]: { quizId: string };
  [ROUTES.QuizCategories]: undefined;
  [ROUTES.QuizDetails]: undefined;
  [ROUTES.Results]: undefined;
};

export type RootStackParamListNavProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
export type BottomTabNavigatorParamListNavProps<
  T extends keyof BottomTabNavigatorParamList
> = {
  navigation: NativeStackNavigationProp<BottomTabNavigatorParamList, T>;
  route: RouteProp<BottomTabNavigatorParamList, T>;
};
export type HomeStackNavigatorParamListNavProps<
  T extends keyof HomeStackNavigatorParamList
> = {
  navigation: NativeStackNavigationProp<HomeStackNavigatorParamList, T>;
  route: RouteProp<HomeStackNavigatorParamList, T>;
};

export type QuizStackParamListNavProps<
  T extends keyof QuizStackNavigatorParamList
> = {
  navigation: NativeStackNavigationProp<QuizStackNavigatorParamList, T>;
  route: RouteProp<QuizStackNavigatorParamList, T>;
};
