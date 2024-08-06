import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { BottomTabNavigatorParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';

const SettingsScreen: FC<
  BottomTabNavigatorParamListNavProps<ROUTES.Settings>
> = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;
