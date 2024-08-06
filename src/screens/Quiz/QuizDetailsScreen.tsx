import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { QuizStackParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';

const QuizDetailsScreen: FC<
  QuizStackParamListNavProps<ROUTES.QuizDetails>
> = () => {
  return (
    <View>
      <Text>QuizDetailsScreen</Text>
    </View>
  );
};

export default QuizDetailsScreen;
