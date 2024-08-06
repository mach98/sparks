import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { HomeStackNavigatorParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';

const HomeScreen: FC<HomeStackNavigatorParamListNavProps<ROUTES.Home>> = () => {
  return (
    <View>
      <Text>HomeScreen:FC</Text>
    </View>
  );
};

export default HomeScreen;
