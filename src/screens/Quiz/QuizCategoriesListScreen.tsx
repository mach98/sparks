import { Text, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import React, { FC, useCallback, useEffect, useState, memo } from 'react';
import { QuizStackParamListNavProps } from '@/src/domain/models/navigation';
import { ROUTES } from '@/src/navigation/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { quizzesData } from '@/src/data/mocks';
import { getIcons } from '@/src/utils/getIcon';
import useQuizStore from '@/src/store/useQuizStore';

const QuizCategoriesListScreen: FC<
  QuizStackParamListNavProps<ROUTES.QuizCategories>
> = ({ navigation }) => {
  const quizData = quizzesData;
  const { quizzes, setQuizzes, setSelectedCategory } = useQuizStore();

  useEffect(() => {
    setQuizzes(quizData);
  }, []);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
    navigation.navigate(ROUTES.QuizDetails);
  };

  const categories = Array.from(new Set(quizzes.map((quiz) => quiz.category)));

  const renderItem: ListRenderItem<string> = useCallback(
    ({ item }) => (
      <TouchableOpacity
        className='bg-gray-400 my-2 py-2.5 px-4 flex-row items-center rounded-lg'
        onPress={() => handleCategoryPress(item)}
      >
        {getIcons(item)}
        <Text className='ml-5 text-lg'>{item}</Text>
      </TouchableOpacity>
    ),
    []
  );
  return (
    <SafeAreaView className='flex-1 p-3'>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
};

export default QuizCategoriesListScreen;
