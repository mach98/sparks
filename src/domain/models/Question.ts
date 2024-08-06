export interface Question {
  id: string;
  content: string;
  type: 'multiple-choice' | 'image' | 'diagram';
  options?: string[];
  image?: string;
  correctAnswer: string;
  userAnswer?: string;
}
