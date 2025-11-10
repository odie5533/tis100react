import { User, Website, WebRing, Badge, Achievement, Widget } from '../types';

// Mock users
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'xXcybergrl2000Xx',
    displayName: 'CyberGrl2000',
    avatar: '🌸',
    level: 12,
    xp: 2450,
    xpToNextLevel: 3000,
    badges: [],
    achievements: [],
    websitesCreated: 5,
    totalVisits: 1337,
    joinedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    username: 'sk8terboi',
    displayName: 'Sk8ter Boi',
    avatar: '🛹',
    level: 8,
    xp: 1200,
    xpToNextLevel: 1500,
    badges: [],
    achievements: [],
    websitesCreated: 3,
    totalVisits: 856,
    joinedAt: new Date('2024-02-20'),
  },
  {
    id: '3',
    username: 'rainbowunicorn',
    displayName: 'Rainbow Unicorn',
    avatar: '🦄',
    level: 15,
    xp: 4567,
    xpToNextLevel: 5000,
    badges: [],
    achievements: [],
    websitesCreated: 12,
    totalVisits: 5432,
    joinedAt: new Date('2024-01-01'),
  },
];

// Mock badges
export const mockBadges: Badge[] = [
  {
    id: 'b1',
    name: 'First Steps',
    description: 'Created your first website',
    icon: '🎉',
    rarity: 'common',
    unlockedAt: new Date('2024-01-15'),
  },
  {
    id: 'b2',
    name: 'Marquee Master',
    description: 'Added 10 marquee tags',
    icon: '📜',
    rarity: 'rare',
    unlockedAt: new Date('2024-01-20'),
  },
  {
    id: 'b3',
    name: 'Under Construction',
    description: 'Used every construction GIF',
    icon: '🚧',
    rarity: 'epic',
    unlockedAt: new Date('2024-02-01'),
  },
  {
    id: 'b4',
    name: 'WebRing Legend',
    description: 'Joined 5 web rings',
    icon: '💫',
    rarity: 'legendary',
  },
  {
    id: 'b5',
    name: 'Social Butterfly',
    description: 'Received 100 guestbook entries',
    icon: '🦋',
    rarity: 'rare',
  },
];

// Mock achievements
export const mockAchievements: Achievement[] = [
  {
    id: 'a1',
    name: 'Website Creator',
    description: 'Create your first website',
    xpReward: 100,
    progress: 1,
    total: 1,
    completed: true,
  },
  {
    id: 'a2',
    name: 'Prolific Builder',
    description: 'Create 10 websites',
    xpReward: 500,
    progress: 5,
    total: 10,
    completed: false,
  },
  {
    id: 'a3',
    name: 'Visitor Magnet',
    description: 'Get 1000 total visits',
    xpReward: 300,
    progress: 1337,
    total: 1000,
    completed: true,
  },
  {
    id: 'a4',
    name: 'Like Collector',
    description: 'Receive 50 likes',
    xpReward: 200,
    progress: 23,
    total: 50,
    completed: false,
  },
];

// Assign badges and achievements to users
mockUsers[0].badges = [mockBadges[0], mockBadges[1], mockBadges[2]];
mockUsers[0].achievements = mockAchievements;
mockUsers[2].badges = [mockBadges[0], mockBadges[1], mockBadges[2], mockBadges[3]];

// Mock widgets
const sampleWidgets: Widget[] = [
  {
    id: 'w1',
    type: 'glitter-text',
    content: 'Welcome to my page!!! ✨',
    style: {
      fontSize: '32px',
      textAlign: 'center',
      rainbow: true,
    },
  },
  {
    id: 'w2',
    type: 'marquee',
    content: '🌟 Thanks for visiting! Check out my web ring! 🌟',
    style: {
      color: '#ff00ff',
      fontSize: '18px',
    },
  },
  {
    id: 'w3',
    type: 'construction',
    content: 'Site Under Construction!',
  },
  {
    id: 'w4',
    type: 'counter',
    content: 'Visitor #',
  },
  {
    id: 'w5',
    type: 'text',
    content: 'Hey there! This is my totally awesome website. I love unicorns, rainbows, and glitter! ✨🦄🌈',
    style: {
      fontSize: '16px',
      color: '#ff00ff',
    },
  },
];

// Mock websites
export const mockWebsites: Website[] = [
  {
    id: 'site1',
    title: "CyberGrl2000's Cyber Paradise 💖",
    author: mockUsers[0],
    widgets: sampleWidgets,
    theme: 'cyber',
    backgroundColor: '#000000',
    backgroundImage: 'stars',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-03-01'),
    visits: 1337,
    likes: 42,
    comments: [
      {
        id: 'c1',
        author: mockUsers[1],
        content: 'Cool site! Love the marquee! 🌟',
        createdAt: new Date('2024-03-01'),
      },
    ],
    featured: true,
  },
  {
    id: 'site2',
    title: "Sk8ter's Rad Zone 🛹",
    author: mockUsers[1],
    widgets: [
      {
        id: 'w10',
        type: 'glitter-text',
        content: 'SK8 OR DIE 🛹',
        style: { fontSize: '28px', textAlign: 'center' },
      },
      {
        id: 'w11',
        type: 'text',
        content: 'This is where I post my sick tricks and stuff.',
        style: { fontSize: '14px' },
      },
    ],
    theme: 'neon',
    backgroundColor: '#1a1a1a',
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20'),
    visits: 856,
    likes: 28,
    comments: [],
    featured: false,
  },
  {
    id: 'site3',
    title: "Rainbow Unicorn's Magical Kingdom 🦄✨",
    author: mockUsers[2],
    widgets: [
      {
        id: 'w20',
        type: 'glitter-text',
        content: '✨🦄 Welcome to the Magic! 🦄✨',
        style: { fontSize: '36px', textAlign: 'center', rainbow: true },
      },
      {
        id: 'w21',
        type: 'marquee',
        content: '🌈 Spreading unicorn magic across the web! 🌈',
      },
      {
        id: 'w22',
        type: 'text',
        content: 'Enter a world of rainbows, sparkles, and pure unicorn magic! This is my special corner of the internet where dreams come true! 💫',
        style: { fontSize: '16px', color: '#ff00ff' },
      },
    ],
    theme: 'pastel',
    backgroundColor: '#ffccff',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-03-05'),
    visits: 5432,
    likes: 156,
    comments: [
      {
        id: 'c10',
        author: mockUsers[0],
        content: 'OMG this is SO magical! 💕',
        createdAt: new Date('2024-03-05'),
      },
      {
        id: 'c11',
        author: mockUsers[1],
        content: 'Whoa, so much glitter!',
        createdAt: new Date('2024-03-04'),
      },
    ],
    featured: true,
  },
];

// Mock web rings
export const mockWebRings: WebRing[] = [
  {
    id: 'wr1',
    name: 'Cyber Cuties Ring 💕',
    description: 'For all the cyber girls and boys making kawaii websites!',
    theme: 'cyber',
    creator: mockUsers[0],
    members: [mockWebsites[0], mockWebsites[2]],
    memberCount: 12,
    createdAt: new Date('2024-01-20'),
    icon: '💕',
  },
  {
    id: 'wr2',
    name: 'Extreme Sports Web 🛹',
    description: 'Sk8ers, BMXers, and extreme athletes unite!',
    theme: 'neon',
    creator: mockUsers[1],
    members: [mockWebsites[1]],
    memberCount: 8,
    createdAt: new Date('2024-02-25'),
    icon: '🛹',
  },
  {
    id: 'wr3',
    name: 'Rainbow Coalition 🌈',
    description: 'All things colorful, sparkly, and magical!',
    theme: 'pastel',
    creator: mockUsers[2],
    members: [mockWebsites[0], mockWebsites[2]],
    memberCount: 24,
    createdAt: new Date('2024-01-10'),
    icon: '🌈',
  },
  {
    id: 'wr4',
    name: 'Under Construction Crew 🚧',
    description: 'Websites that are forever being updated!',
    theme: 'classic',
    creator: mockUsers[0],
    members: [mockWebsites[0], mockWebsites[1], mockWebsites[2]],
    memberCount: 42,
    createdAt: new Date('2024-01-05'),
    icon: '🚧',
  },
];

// Current user
export const currentUser = mockUsers[0];
