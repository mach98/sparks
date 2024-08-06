import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { QuizStackParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';

const QuizScreen: FC<QuizStackParamListNavProps<ROUTES.Quiz>> = () => {
  return (
    <View>
      <Text>QuizScreen</Text>
    </View>
  );
};

export default QuizScreen;
