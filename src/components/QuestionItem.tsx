import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, { FC, useState } from 'react';
import { Question } from '../domain/models/Question';
import { WebView } from 'react-native-webview';
import useQuizStore from '../store/useQuizStore';
import { renderMathContent } from '../utils/renderMathContent';
import { getPrefix } from '../utils/getPrefix';

interface QuizItemProps {
  question: Question;
  onAnswerSelection: () => void;
}

const QuestionItem: FC<QuizItemProps> = ({ question, onAnswerSelection }) => {
  const { width, height } = useWindowDimensions();
  const { currentQuiz } = useQuizStore();
  const [answered, setAnswered] = useState(false);

  const isMathChemPhy =
    currentQuiz?.category === 'Math' || currentQuiz?.category === 'Physics';

  const handlePress = (index: number) => {
    if (answered) return;
    const isCorrect = question.options?.[index] === question.correctAnswer;
    if (isCorrect) {
      setAnswered(true);
      onAnswerSelection();
    }
  };

  return (
    <View key={question.id} className='flex-1 mt-5'>
      <View className='w-full h-1/3 flex-row items-center mt-5'>
        <Text className='mr-3 font-semibold text-lg items-center'>
          {question.id.slice(1)}.
        </Text>
        {isMathChemPhy ? (
          <View className='w-full justify-center'>
            <WebView
              originWhitelist={['*']}
              source={{ html: renderMathContent(question.content) }}
              style={{
                width: width * 0.9,
                height: 'auto',
                alignItems: 'center',
              }}
            />
          </View>
        ) : (
          <View className='bg-white w-full items-start justify-center py-3 pl-2'>
            <Text className='text-lg items-center font-semibold'>
              {question.content}
            </Text>
          </View>
        )}
      </View>
      {question.type === 'image' && (
        <Image
          source={{ uri: question.image }}
          className={`w-[${width * 0.8}] h-[${height}*0.3]`}
        />
      )}
      {question.options?.map((option, index) => (
        <TouchableOpacity
          className='flex-row mt-3 py-1 items-center'
          key={index}
          onPress={() => handlePress(index)}
        >
          <Text className='mr-3 font-semibold text-lg'>
            {getPrefix(index)}.
          </Text>
          {isMathChemPhy ? (
            <View className='w-full justify-center'>
              <WebView
                originWhitelist={['*']}
                source={{ html: renderMathContent(option) }}
                style={{
                  width: width * 0.9,
                  height: height * 0.001,
                }}
              />
            </View>
          ) : (
            <View className='bg-white w-full items-start justify-center py-3 pl-2'>
              <Text className='text-base items-center font-semibold'>
                {option}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuestionItem;
