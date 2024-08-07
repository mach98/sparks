import { Button, useWindowDimensions, ScrollView, Text } from 'react-native';
import React, { FC, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QuizStackParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';
import useQuizStore from '@/src/store/useQuizStore';
import QuestionItem from '@/src/components/QuestionItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

const QuizScreen: FC<QuizStackParamListNavProps<ROUTES.Quiz>> = ({
  route,
  navigation,
}) => {
  const { quizId } = route.params;
  const { currentQuiz } = useQuizStore();

  const isMathOrChem =
    currentQuiz?.category === 'Math' || currentQuiz?.category === 'Chemistry';

  if (!currentQuiz || currentQuiz.id !== quizId) {
    navigation.goBack();
    return null;
  }

  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };
  const handleSubmit = () => {
    navigation.navigate(ROUTES.Results);
  };

  return (
    <SafeAreaView className='flex-1 '>
      <ScrollView className='flex-1 p-3'>
        {currentQuiz.questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onAnswerChange={handleAnswerChange}
          />
        ))}
        <TouchableOpacity
          onPress={handleSubmit}
          className='bg-white px-5 py-3 rounded-full w-3/4 self-center mt-10'
        >
          <Text className='text-center text-lg font-semibold text-primary'>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizScreen;
