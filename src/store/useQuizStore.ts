import { create } from 'zustand';
import { Quiz } from '../domain/models/Quiz';

interface QuizState {
  quizzes: Quiz[];
  currentQuiz: Quiz | null;
  setQuizzes: (quizzes: Quiz[]) => void;
  setCurrentQuiz: (quiz: Quiz) => void;
}

const useQuizStore = create<QuizState>((set) => ({
  quizzes: [],
  currentQuiz: null,
  setQuizzes: (quizzes) => set({ quizzes }),
  setCurrentQuiz: (quiz) => set({ currentQuiz: quiz }),
}));

export default useQuizStore;
