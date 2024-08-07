import {
  Text,
  TouchableOpacity,
  Image,
  ListRenderItem,
  FlatList,
} from 'react-native';
import React, { FC, useCallback } from 'react';
import { QuizStackParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import useQuizStore from '@/src/store/useQuizStore';
import { Quiz } from '@/src/domain/models/Quiz';

const QuizDetailsScreen: FC<QuizStackParamListNavProps<ROUTES.QuizDetails>> = ({
  navigation,
}) => {
  const { quizzes, selectedCategory, setCurrentQuiz } = useQuizStore();

  const filteredQuizzes = quizzes.filter(
    (quiz) => quiz.category === selectedCategory
  );

  const handleQuizPress = (quiz: Quiz) => {
    setCurrentQuiz(quiz);
    navigation.navigate(ROUTES.Quiz, { quizId: quiz.id });
  };

  const renderItem: ListRenderItem<Quiz> = useCallback(
    ({ item }) => (
      <TouchableOpacity
        onPress={() => handleQuizPress(item)}
        className='p-5 bg-gray-400 my-3 rounded-lg'
      >
        <Image source={{ uri: item.thumbnail }} className='w-5 h-5' />
        <Text className='text-lg font-semibold'>{item.title}</Text>
        <Text className='text-base'>{item.description}</Text>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <SafeAreaView className='flex-1 p-3'>
      <FlatList
        data={filteredQuizzes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default QuizDetailsScreen;
