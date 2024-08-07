import { create } from 'zustand';
import { Quiz } from '../domain/models/Quiz';

interface QuizState {
  quizzes: Quiz[];
  currentQuiz: Quiz | null;
  quizScore: number | null;
  selectedCategory: string | null;
  setQuizzes: (quizzes: Quiz[]) => void;
  setCurrentQuiz: (quiz: Quiz) => void;
  setSelectedCategory: (category: string) => void;
  setQuizScore: (score: number) => void;
  resetState: () => void;
}

const useQuizStore = create<QuizState>((set) => ({
  quizzes: [],
  currentQuiz: null,
  quizScore: null,
  selectedCategory: null,
  setQuizzes: (quizzes) => set({ quizzes }),
  setCurrentQuiz: (quiz) => set({ currentQuiz: quiz }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setQuizScore: (score) => set({ quizScore: score }),
  resetState: () =>
    set({
      quizzes: [],
      currentQuiz: null,
      quizScore: null,
      selectedCategory: null,
    }),
}));
export default useQuizStore;
