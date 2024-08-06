import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { QuizStackParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';

const ResultsScreen: FC<QuizStackParamListNavProps<ROUTES.Results>> = () => {
  return (
    <View>
      <Text>Results</Text>
    </View>
  );
};

export default ResultsScreen;
