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
import { WebView } from 'react-native-webview';

interface QuizItemProps {
  question: Question;
  onAnswerChange: (questionId: string, answer: string) => void;
}

const QuestionItem: FC<QuizItemProps> = ({ question, onAnswerChange }) => {
  const { width, height } = useWindowDimensions();

  const renderMathContent = (content: string) => {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.18/katex.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.18/katex.min.js"></script>
        <script>
          document.addEventListener("DOMContentLoaded", function() {
            var content = "${content.replace(/"/g, '\\"')}";
            var html = katex.renderToString(content, { throwOnError: false });
            document.getElementById('content').innerHTML = html;
          });
        </script>
      </head>
      <body>
        <div id="content"></div>
      </body>
      </html>
    `;
    return htmlContent;
  };

  return (
    <View key={question.id} className={`mt-7 w-[${width}*0.9] self-center`}>
      <WebView
        originWhitelist={['*']}
        source={{ html: renderMathContent(question.content) }}
        className={`w-[${width}*0.9] h-[${height} * 0.3]`}
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
