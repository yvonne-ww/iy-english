// User and Authentication
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  lastLogin: Date;
}

// Word and Vocabulary
export interface EnglishDefinition {
  definition: string;
  translation: string;
  hidden: boolean;
}

export interface WordConjugation {
  form: string;
  partOfSpeech: string;
  meaning: string;
}

export interface Collocation {
  phrase: string;
  meaning: string;
  example?: string;
}

export interface ExampleSentence {
  sentence: string;
  translation: string;
  level: 'advanced' | 'daily';
  hidden: boolean;
}

export interface Word {
  id: string;
  english: string;
  pronunciation: string;
  partOfSpeech: string;
  chineseMeaning: string;
  englishDefinitions: EnglishDefinition[];
  chineseExplanation: string;
  conjugations: WordConjugation[];
  collocations: Collocation[];
  exampleSentences: ExampleSentence[];
  audioUrl?: string;
  level: 'basic' | 'junior' | 'senior' | 'reference' | 'extra';
  createdAt: Date;
  updatedAt: Date;
}

// Practice and Learning
export interface PracticeRecord {
  id: string;
  userId: string;
  wordbookId?: string;
  wordIds: string[];
  practiceType: 'flashcard' | 'multiple-choice' | 'spelling' | 'listening' | 'mixed';
  totalQuestions: number;
  correctAnswers: number;
  accuracy: number;
  duration: number;
  timestamp: Date;
  selectedWords?: number;
}

export interface WordProgress {
  id: string;
  userId: string;
  wordId: string;
  wordbookId?: string;
  status: 'new' | 'learning' | 'mastered';
  reviewCount: number;
  correctCount: number;
  incorrectCount: number;
  lastReviewDate?: Date;
  nextReviewDate?: Date;
  easeFactor: number;
  interval: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface DailyChallenge {
  id: string;
  userId: string;
  date: Date;
  targetWords: number;
  completedWords: number;
  wordsCompleted: string[];
  completed: boolean;
  completedAt?: Date;
}

export interface DailyReview {
  id: string;
  userId: string;
  date: Date;
  wordIds: string[];
  completed: boolean;
  completedAt?: Date;
}

// Custom Wordbook
export interface CustomWordbook {
  id: string;
  userId: string;
  name: string;
  description?: string;
  wordCount: number;
  createdAt: Date;
  updatedAt: Date;
  ocrSource?: {
    imageUrl: string;
    uploadedAt: Date;
  };
}

export interface WorkbookWord {
  id: string;
  wordbookId: string;
  wordId: string;
  addedAt: Date;
}

// Activity Log
export interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  metadata: {
    wordbookId?: string;
    wordCount?: number;
    practiceType?: string;
    accuracy?: number;
    timestamp: Date;
  };
  createdAt: Date;
}

// Statistics
export interface WeeklyStats {
  userId: string;
  week: number;
  year: number;
  practiceCount: number;
  questionsAttempted: number;
  questionsCorrect: number;
  accuracy: number;
  studyDuration: number;
  wordsAdded: number;
  streak: number;
}

export interface SkillStats {
  userId: string;
  understanding: number;
  listening: number;
  spelling: number;
  sentences: number;
  totalWordsMastered: number;
  totalWordsLearning: number;
  vocabularyCoverage: number;
}

// Exam
export interface ExamScope {
  id: string;
  name: string;
  levels: string[];
  wordCount: number;
  description: string;
}

export interface ExamCountdown {
  userId: string;
  examDate: Date;
  selectedScope: ExamScope;
  daysRemaining: number;
  wordsToReview: number;
  dailyTarget: number;
  progress: number;
}
