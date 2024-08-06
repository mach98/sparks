import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  HomeStackNavigatorParamList,
  QuizStackNavigatorParamList,
  RootStackParamList,
} from '../domain/models/navigation';

export const useRootNavigation = () =>
  useNavigation<StackNavigationProp<RootStackParamList>>();
export const useHomeStackNavigation = () =>
  useNavigation<StackNavigationProp<HomeStackNavigatorParamList>>();
export const useQuizStackNavigation = () =>
  useNavigation<StackNavigationProp<QuizStackNavigatorParamList>>();
