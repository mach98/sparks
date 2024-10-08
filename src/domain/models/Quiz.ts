import { Question } from './Question';

export interface Quiz {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  category: string;
  questions: Question[];
}
