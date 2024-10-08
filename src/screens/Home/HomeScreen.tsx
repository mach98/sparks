import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { FC, useEffect } from 'react';
import { HomeStackNavigatorParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { COLORS } from '@/src/themes/colors';
import { Avatar } from '@/src/themes/images';
import {
  useHomeStackNavigation,
  useQuizStackNavigation,
} from '@/src/navigation/useTypedNavigation';
import SButton from '@/src/components/SButton';
import { quizzesData } from '@/src/data/mocks';
import useQuizStore from '@/src/store/useQuizStore';

const HomeScreen: FC<HomeStackNavigatorParamListNavProps<ROUTES.Home>> = () => {
  const quizData = quizzesData;
  const { setQuizzes, setSelectedCategory } = useQuizStore();
  const navigation = useHomeStackNavigation();

  useEffect(() => {
    setQuizzes(quizData);
  }, []);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
    navigation.navigate(ROUTES.QuizStack, {
      screen: ROUTES.QuizDetails,
    });
    //quizNavigation.navigate(ROUTES.QuizDetails);
  };
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
            <Text className='text-darkBlue text-4xl font-bold mt-3'>
              Random Quiz
            </Text>
          </View>
          <View className='mt-5 bg-primary w-full rounded-b-xl p-5 flex-row justify-center items-center'>
            <SButton
              title='Start Quiz'
              onPress={() => {}}
              borderRadius='rounded-full'
            />
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
                  screen: ROUTES.QuizCategories,
                })
              }
            >
              <Text className='text-blue text-lg font-semibold'>See More</Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row justify-between mt-3'>
            <TouchableOpacity
              className='items-center'
              onPress={() => handleCategoryPress('Math')}
            >
              <MaterialCommunityIcons name='math-compass' size={25} />
              <Text className='mt-2 font-semibold'>Math</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='items-center'
              onPress={() => handleCategoryPress('Chemistry')}
            >
              <SimpleLineIcons name='chemistry' size={25} />
              <Text className='mt-2 font-semibold'>Chemistry</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='items-center'
              onPress={() => handleCategoryPress('Biology')}
            >
              <FontAwesome5 name='microscope' size={25} />
              <Text className='mt-2 font-semibold'>Biology</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='items-center'
              onPress={() => handleCategoryPress('History')}
            >
              <Ionicons name='time-outline' size={25} />
              <Text className='mt-2 font-semibold'>History</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='items-center'
              onPress={() => handleCategoryPress('English')}
            >
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
