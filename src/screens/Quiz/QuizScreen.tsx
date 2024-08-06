import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QuizStackParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';

const QuizScreen: FC<QuizStackParamListNavProps<ROUTES.Quiz>> = () => {
  return (
    <SafeAreaView className='flex-1 p-3'>
      <Text>QuizScreen</Text>
    </SafeAreaView>
  );
};

export default QuizScreen;
