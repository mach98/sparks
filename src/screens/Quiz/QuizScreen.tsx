import { Button, useWindowDimensions, ScrollView, Text } from 'react-native';
import React, { FC, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QuizStackParamListNavProps } from '../../domain/models/navigation';
import { ROUTES } from '../../navigation/routes';
import useQuizStore from '@/src/store/useQuizStore';
import QuestionItem from '@/src/components/QuestionItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WebView from 'react-native-webview';

const QuizScreen: FC<QuizStackParamListNavProps<ROUTES.Quiz>> = ({
  route,
  navigation,
}) => {
  const { quizId } = route.params;
  const { currentQuiz, setQuizScore } = useQuizStore();
  const [score, setScore] = useState(0);
  if (!currentQuiz || currentQuiz.id !== quizId) {
    navigation.goBack();
    return null;
  }

  const onAnswerSelection = () => {
    setScore((prev) => prev + 1);
    console.log(score);
  };

  const handleSubmit = () => {
    setQuizScore(score);
    navigation.replace(ROUTES.Results);
  };

  return (
    <SafeAreaView className='flex-1 '>
      <ScrollView className='p-3'>
        {currentQuiz.questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onAnswerSelection={onAnswerSelection}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={handleSubmit}
        className='bg-white px-5 py-3 rounded-full w-3/4 self-center mt-15'
      >
        <Text className='text-center text-lg font-semibold text-primary'>
          Submit
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuizScreen;
