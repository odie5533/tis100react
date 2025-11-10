// Widget types for the website builder
export type WidgetType =
  | 'text'
  | 'marquee'
  | 'image'
  | 'counter'
  | 'guestbook'
  | 'webring'
  | 'construction'
  | 'glitter-text'
  | 'midi-player'
  | 'hit-counter';

export interface Widget {
  id: string;
  type: WidgetType;
  content: string;
  style?: {
    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    fontFamily?: string;
    textAlign?: 'left' | 'center' | 'right';
    blink?: boolean;
    rainbow?: boolean;
  };
}

// User and profile types
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: Date;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  xpReward: number;
  progress: number;
  total: number;
  completed: boolean;
}

export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  badges: Badge[];
  achievements: Achievement[];
  websitesCreated: number;
  totalVisits: number;
  joinedAt: Date;
}

// Website types
export interface Website {
  id: string;
  title: string;
  author: User;
  widgets: Widget[];
  theme: 'classic' | 'cyber' | 'pastel' | 'neon' | 'matrix';
  backgroundColor: string;
  backgroundImage?: string;
  createdAt: Date;
  updatedAt: Date;
  visits: number;
  likes: number;
  comments: Comment[];
  featured: boolean;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  createdAt: Date;
}

// WebRing types
export interface WebRing {
  id: string;
  name: string;
  description: string;
  theme: string;
  creator: User;
  members: Website[];
  memberCount: number;
  createdAt: Date;
  icon: string;
}

// Guestbook types
export interface GuestbookEntry {
  id: string;
  author: User;
  message: string;
  mood?: string;
  createdAt: Date;
}
