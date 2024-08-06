import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { QuizStackParamListNavProps } from '@/src/domain/models/navigation';
import { ROUTES } from '@/src/navigation/routes';
import { SafeAreaView } from 'react-native-safe-area-context';

const QuizListScreen: FC<QuizStackParamListNavProps<ROUTES.QuizList>> = () => {
  return (
    <SafeAreaView className='flex-1 p-3'>
      <Text>QuizListScreen</Text>
    </SafeAreaView>
  );
};

export default QuizListScreen;
