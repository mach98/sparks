import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { QuizStackParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';
import { SafeAreaView } from 'react-native-safe-area-context';

const QuizDetailsScreen: FC<
  QuizStackParamListNavProps<ROUTES.QuizDetails>
> = () => {
  return (
    <SafeAreaView className='flex-1 p-3'>
      <Text>QuizDetailsScreen</Text>
    </SafeAreaView>
  );
};

export default QuizDetailsScreen;
