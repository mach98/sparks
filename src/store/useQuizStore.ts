import { create } from 'zustand';
import { Quiz } from '../domain/models/Quiz';

interface QuizState {
  quizzes: Quiz[];
  currentQuiz: Quiz | null;
  selectedCategory: string | null;
  setQuizzes: (quizzes: Quiz[]) => void;
  setCurrentQuiz: (quiz: Quiz) => void;
  setSelectedCategory: (category: string) => void;
}

const useQuizStore = create<QuizState>((set) => ({
  quizzes: [],
  currentQuiz: null,
  selectedCategory: null,
  setQuizzes: (quizzes) => set({ quizzes }),
  setCurrentQuiz: (quiz) => set({ currentQuiz: quiz }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
export default useQuizStore;
