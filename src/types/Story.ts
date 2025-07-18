export interface StoryPage {
  id: number;
  text: string;
  image?: string;
}

export interface Story {
  id: string;
  title: string;
  category: 'scripture' | 'prophet' | 'gospel';
  ageGroup: 'nursery' | 'sunbeam' | 'ctr' | 'valiant';
  difficulty: 'easy' | 'medium' | 'hard';
  readingTime: number; // in minutes
  description: string;
  coverImage: string;
  pages: StoryPage[];
  audioUrl?: string;
}

export interface StoryCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}