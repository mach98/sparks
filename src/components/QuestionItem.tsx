import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
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

  const getPrefix = (index: number): string => {
    const prefixes = ['A', 'B', 'C'];
    return prefixes[index] || '';
  };

  const renderMathContent = (content: string) => {
    const escapeHtml = (unsafe: string) => {
      return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };
    const escapeContent = escapeHtml(content);
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+" crossorigin="anonymous">
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" integrity="sha384-7zkQWkzuo3B5mTepMUcHkMB5jZaolc2xDwL6VFqjFALcbeS9Ggm/Yr2r3Dy4lfFg" crossorigin="anonymous"></script>
        <style>
        #content {
          font-size: 3em;

        }
      </style>
        <script>
          document.addEventListener("DOMContentLoaded", function() {
            var content = "${content.replace(/"/g, '\\"')}";
            var html = katex.renderToString(content, { throwOnError: false, trusts:true });
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
    <View key={question.id} className='mt-5 self-center'>
      <View className='w-full h-10'>
        <WebView
          originWhitelist={['*']}
          source={{ html: renderMathContent(question.content) }}
          style={{ width: width * 0.9, height: 'auto', alignItems: 'center' }}
        />
      </View>
      {question.type === 'image' && (
        <Image
          source={{ uri: question.image }}
          className={`w-[${width * 0.8}] h-[${height}*0.3]`}
        />
      )}
      {question.options?.map((option, index) => (
        <TouchableOpacity
          className='flex-row mt-2 py-1 items-center'
          key={index}
        >
          <Text className='mr-3 font-semibold text-lg'>
            {getPrefix(index)}.
          </Text>
          <WebView
            originWhitelist={['*']}
            source={{ html: renderMathContent(option) }}
            style={{
              width: width * 0.9,
              height: height * 0.001,
              alignItems: 'center',
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuestionItem;
