export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  summary: string;
  theory: string[]; // detailed paragraphs
  examples: {
    label: string;
    text: string;
    source?: string;
  }[];
  exerciseDescription: string;
  exercisePrompt: string;
  tasks: string[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  lessonIds: number[];
}

export interface Draft {
  id: string; // unique draft ID
  lessonId: number | 'final' | 'free'; // number 1-15, final project, or free-writing notebook
  title: string;
  content: string;
  feedback: string | null;
  updatedAt: string;
  isCompleted: boolean;
}

export interface BookRecommendation {
  title: string;
  author: string;
  reason: string;
}

export interface MovieRecommendation {
  title: string;
  director: string;
  description: string;
}

export interface StudyDay {
  day: number;
  task: string;
  lessonId?: number;
  activity: string;
}

export interface WriterHabit {
  id: string;
  habit: string;
  description: string;
}

export interface CommonError {
  error: string;
  explanation: string;
  solution: string;
}
