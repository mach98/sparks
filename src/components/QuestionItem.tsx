import { View, Text, Image, useWindowDimensions, Button } from 'react-native';
import React, { FC, ReactElement } from 'react';
import RenderHTML, {
  CustomBlockRenderer,
  defaultHTMLElementModels,
  HTMLContentModel,
  HTMLElementModel,
  RenderHTMLProps,
} from 'react-native-render-html';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Question } from '../domain/models/Question';

interface QuizItemProps {
  question: Question;
  onAnswerChange: (questionId: string, answer: string) => void;
}

const QuestionItem: FC<QuizItemProps> = ({ question, onAnswerChange }) => {
  const { width, height } = useWindowDimensions();

  const renderMathContent = () => {
    try {
      const html = katex.renderToString(String.raw`c = \pm\sqrt{a^2 + b^2}`, {
        throwOnError: false,
      });
      return html;
    } catch (error) {
      return content;
    }
  };

  const mathRenderer = (props: RenderHTMLProps): ReactElement => {
    const { key, domNode } = props;
    const content = domNode.children[0].data;
    return (
      <Text key={key} className='text-red-500 text-lg font-semibold'>
        {renderMathContent(content)}
      </Text>
    );
  };

  return (
    <View key={question.id} className={`mt-7 w-[${width}*0.9] self-center`}>
      <RenderHTML
        source={{ html: renderMathContent() }}
        contentWidth={width * 0.9}
      />

      {question.type === 'image' && (
        <Image
          source={{ uri: question.image }}
          className={`w-[${width * 0.8}] h-[${height}*0.3]`}
        />
      )}
    </View>
  );
};

export default QuestionItem;
