import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { FC } from 'react';
import { HomeStackNavigatorParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { COLORS } from '@/src/themes/colors';
import { Avatar } from '@/src/themes/images';
import { useHomeStackNavigation } from '@/src/navigation/useTypedNavigation';

const HomeScreen: FC<HomeStackNavigatorParamListNavProps<ROUTES.Home>> = () => {
  const navigation = useHomeStackNavigation();
  return (
    <SafeAreaView className='flex-1'>
      <View className='h-1/3 top-0 bg-primary' />
      <View className='h-3/5' />
      <View className='absolute top-0 right-3 left-3'>
        <View className='p-5 mt-10'>
          <View className='flex-row justify-between items-center'>
            <TouchableOpacity className='rounded-full bg-white p-2'>
              <Image
                source={require('../../../assets/avatar.png')}
                className='bg-white rounded-full p-4'
                resizeMode='contain'
              />
            </TouchableOpacity>
            <TouchableOpacity className='rounded-full bg-white p-2'>
              <Ionicons
                size={25}
                name='notifications'
                className='rounded-full bg-white'
                color={COLORS.black}
              />
            </TouchableOpacity>
          </View>
          <Text className='text-white font-semibold text-2xl mt-3'>
            Hello Will 👋
          </Text>
          <Text className='text-white font-regular text-lg mt-1'>
            Let's play and Learn
          </Text>
        </View>
        <View className='bg-white items-center rounded-xl w-full'>
          <View className='p-5 items-center'>
            <Text className='text-darkBlue text-lg font-semibold text-center'>
              Quiz of the Day
            </Text>
            <Text className='text-darkBlue text-5xl font-bold mt-3'>
              1,000,000
            </Text>
          </View>
          <View className='mt-5 bg-primary w-full rounded-b-xl p-5 flex-row justify-center items-center'>
            <TouchableOpacity className='bg-white px-5 py-3 rounded-full w-3/4'>
              <Text className='text-center text-lg font-semibold text-primary'>
                Start Quiz
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='px-5 py-3'>
          <View className='flex-row justify-between'>
            <Text className='text-black text-lg font-semibold'>
              Quiz Categories
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ROUTES.QuizStack, {
                  screen: ROUTES.QuizList,
                })
              }
            >
              <Text className='text-blue text-lg font-semibold'>See More</Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row justify-between mt-3'>
            <TouchableOpacity className='items-center'>
              <MaterialCommunityIcons name='math-compass' size={25} />
              <Text className='mt-2 font-semibold'>Math</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center'>
              <SimpleLineIcons name='chemistry' size={25} />
              <Text className='mt-2 font-semibold'>Chemistry</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center'>
              <FontAwesome5 name='microscope' size={25} />
              <Text className='mt-2 font-semibold'>Biology</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center'>
              <Ionicons name='time-outline' size={25} />
              <Text className='mt-2 font-semibold'>History</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center'>
              <MaterialCommunityIcons name='alphabetical-variant' size={25} />
              <Text className='mt-2 font-semibold'>English</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='items-start bg-primary m-3 p-5 rounded-lg'>
          <Text className='text-white text-xl font-semibold'>
            Refer & Learn with your Friends
          </Text>
          <Text className='text-white font-base w-4/6 mt-2'>
            Share with your friends and loved ones to come and play
          </Text>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: 'white',
              marginTop: 7,
            }}
          >
            <Text className='text-white'>Invite Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
