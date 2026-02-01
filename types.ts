
import { ReactNode } from 'react';

export type Category = 'research' | 'strategy' | 'ia' | 'tools' | 'all';

export interface Resource {
  cat: Category;
  subcategory?: string;
  icon: string;
  title: string;
  titleEn?: string;
  type: string;
  desc: string;
  descEn?: string;
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
