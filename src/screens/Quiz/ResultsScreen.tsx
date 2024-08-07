import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { QuizStackParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import useQuizStore from '@/src/store/useQuizStore';
import { useHomeStackNavigation } from '@/src/navigation/useTypedNavigation';
import SButton from '@/src/components/SButton';

const ResultsScreen: FC<QuizStackParamListNavProps<ROUTES.Results>> = () => {
  const { quizScore, resetState } = useQuizStore();
  const navigation = useHomeStackNavigation();
  return (
    <SafeAreaView className='flex-1 p-5'>
      <Text className='text-2xl'>Your Score is: {quizScore}!</Text>
      <Text className='text-2xl'>Better Luck Next time!</Text>
      <SButton
        onPress={() => {
          resetState();
          navigation.replace(ROUTES.Home);
        }}
        title='Return to Home'
      />
    </SafeAreaView>
  );
};

export default ResultsScreen;
