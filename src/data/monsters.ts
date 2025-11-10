export interface Monster {
  id: string;
  name: string;
  species: string;
  show: 'Buffy' | 'Angel';
  dangerLevel: 1 | 2 | 3 | 4 | 5;
  personality: string;
  specialAbilities: string[];
  dietaryNeeds: string;
  bio: string;
  adoptionStatus: 'available' | 'pending' | 'adopted';
  image: string; // emoji for now
  age: string;
  lastSeen: string; // episode reference
}

export const monsters: Monster[] = [
  {
    id: 'vamp-001',
    name: 'Harmony Kendall',
    species: 'Vampire',
    show: 'Buffy',
    dangerLevel: 2,
    personality: 'Ditzy, fashion-forward, surprisingly loyal',
    specialAbilities: ['Vampire strength', 'Minion management', 'Valley girl charm'],
    dietaryNeeds: 'Blood (pig blood acceptable)',
    bio: 'Former Sunnydale High student turned vampire. Great with organizing events and totally not evil (most of the time). Comes with her own unicorn collection!',
    adoptionStatus: 'available',
    image: '🧛‍♀️',
    age: 'Eternally 18',
    lastSeen: 'Angel Season 5',
  },
  {
    id: 'vamp-002',
    name: 'Spike',
    species: 'Vampire',
    show: 'Buffy',
    dangerLevel: 4,
    personality: 'Snarky, poetic, surprisingly romantic',
    specialAbilities: ['Fighting prowess', 'Witty comebacks', 'Guitar skills'],
    dietaryNeeds: 'Blood, hot chocolate, and the occasional cigarette',
    bio: 'William the Bloody! Comes with his own leather duster and cheekbones that could cut glass. Warning: may fall in love with slayer.',
    adoptionStatus: 'available',
    image: '😈',
    age: '200+ years',
    lastSeen: 'Buffy Season 7',
  },
  {
    id: 'demon-001',
    name: 'Lorne',
    species: 'Pylean Demon',
    show: 'Angel',
    dangerLevel: 1,
    personality: 'Fabulous, empathic, showbiz-loving',
    specialAbilities: ['Reads destinies through song', 'Excellent host', 'Fashion advice'],
    dietaryNeeds: 'Sea Breeze cocktails, vegetarian diet',
    bio: 'The Host with the Most! This green demon from Pylea runs a karaoke bar and can read your future when you sing. Comes with impeccable taste in music!',
    adoptionStatus: 'available',
    image: '👹',
    age: '100+ years',
    lastSeen: 'Angel Season 5',
  },
  {
    id: 'demon-002',
    name: 'Clem',
    species: 'Loose-Skinned Demon',
    show: 'Buffy',
    dangerLevel: 1,
    personality: 'Friendly, loves kittens, excellent neighbor',
    specialAbilities: ['Poker champion', 'Kitten poker expertise', 'Very huggable'],
    dietaryNeeds: 'Kittens (just kidding!), regular snacks',
    bio: 'The friendliest demon in Sunnydale! Perfect for families. Loves watching TV and playing cards. All those skin flaps are good for storing snacks!',
    adoptionStatus: 'available',
    image: '🤗',
    age: 'Unknown',
    lastSeen: 'Buffy Season 7',
  },
  {
    id: 'vamp-003',
    name: 'Drusilla',
    species: 'Vampire',
    show: 'Buffy',
    dangerLevel: 5,
    personality: 'Psychic, whimsical, utterly insane',
    specialAbilities: ['Precognition', 'Hypnosis', 'Tea party hostess'],
    dietaryNeeds: 'Blood, preferably from someone terrified',
    bio: 'Dru sees what others cannot! This Victorian vampire comes with her own dolls and visions of the future. Warning: May eat your pets.',
    adoptionStatus: 'available',
    image: '🦇',
    age: '200+ years',
    lastSeen: 'Angel Season 2',
  },
  {
    id: 'demon-003',
    name: 'Anya (Anyanka)',
    species: 'Ex-Vengeance Demon',
    show: 'Buffy',
    dangerLevel: 2,
    personality: 'Blunt, money-obsessed, learning humanity',
    specialAbilities: ['Retail management', 'Vengeance (temporarily unavailable)', 'Radical honesty'],
    dietaryNeeds: 'Regular human food, loves money more than eating',
    bio: 'Former vengeance demon turned human! 1,100 years of experience with a unique perspective on capitalism. Excellent with money management!',
    adoptionStatus: 'available',
    image: '💰',
    age: '1,100+ years (looks 20)',
    lastSeen: 'Buffy Season 7',
  },
  {
    id: 'robot-001',
    name: 'April (BuffyBot)',
    species: 'Robot',
    show: 'Buffy',
    dangerLevel: 3,
    personality: 'Literal, devoted, malfunctioning occasionally',
    specialAbilities: ['Super strength', 'Perfect devotion', 'Never needs sleep'],
    dietaryNeeds: 'Electricity and occasional maintenance',
    bio: 'A robot programmed to be the perfect girlfriend! Now seeking new purpose. May occasionally malfunction and punch through walls. Warranty expired.',
    adoptionStatus: 'adopted',
    image: '🤖',
    age: '2 years',
    lastSeen: 'Buffy Season 5',
  },
  {
    id: 'demon-004',
    name: 'Whistler',
    species: 'Demon Balance Keeper',
    show: 'Buffy',
    dangerLevel: 2,
    personality: 'Mysterious, cryptic, jazzy',
    specialAbilities: ['Balance maintenance', 'Cryptic advice', 'Snappy dressing'],
    dietaryNeeds: 'Unknown, possibly just vibes',
    bio: 'A demon who works for the Powers That Be! Comes with mysterious knowledge and a cool hat. May disappear without explanation.',
    adoptionStatus: 'available',
    image: '🎩',
    age: 'Ancient',
    lastSeen: 'Buffy Season 2',
  },
  {
    id: 'demon-005',
    name: 'Sweet',
    species: 'Musical Demon',
    show: 'Buffy',
    dangerLevel: 4,
    personality: 'Showman, dramatic, loves tap dancing',
    specialAbilities: ['Makes everyone sing and dance', 'Tap dancing', 'Jazz hands'],
    dietaryNeeds: 'The burning passion of musical theater',
    bio: 'This demon makes life a musical! Warning: May cause spontaneous combustion through dance. Perfect for parties!',
    adoptionStatus: 'available',
    image: '🎭',
    age: 'Timeless',
    lastSeen: 'Buffy Season 6 - Once More With Feeling',
  },
  {
    id: 'vamp-004',
    name: 'Darla',
    species: 'Vampire',
    show: 'Angel',
    dangerLevel: 5,
    personality: 'Cunning, elegant, maternal (sometimes)',
    specialAbilities: ['Master manipulation', 'Historical knowledge', 'Resurrection experience'],
    dietaryNeeds: 'Blood, preferably with a vintage',
    bio: 'The Master\'s favorite! This 400-year-old vampire has died and come back multiple times. Comes with centuries of fashion sense!',
    adoptionStatus: 'available',
    image: '👑',
    age: '400+ years',
    lastSeen: 'Angel Season 3',
  },
  {
    id: 'demon-006',
    name: 'Illyria',
    species: 'Old One',
    show: 'Angel',
    dangerLevel: 5,
    personality: 'Ancient, imperious, time-bending',
    specialAbilities: ['Time manipulation', 'Super strength', 'Existential wisdom'],
    dietaryNeeds: 'The blood of lesser beings',
    bio: 'An ancient god-king from the demon age! Comes in a stylish blue shell and can alter time. Warning: May have identity issues.',
    adoptionStatus: 'pending',
    image: '👽',
    age: 'Millions of years',
    lastSeen: 'Angel Season 5',
  },
  {
    id: 'werewolf-001',
    name: 'Oz',
    species: 'Werewolf',
    show: 'Buffy',
    dangerLevel: 3,
    personality: 'Laconic, musical, zen',
    specialAbilities: ['Guitar mastery', 'Werewolf transformation', 'Profound brevity'],
    dietaryNeeds: 'Regular food, secure cage 3 nights a month',
    bio: 'The coolest werewolf in Sunnydale! Comes with his own van and band equipment. Only dangerous three nights a month. Very low maintenance!',
    adoptionStatus: 'available',
    image: '🐺',
    age: '19',
    lastSeen: 'Buffy Season 4',
  },
];

export const getMonsterById = (id: string): Monster | undefined => {
  return monsters.find((m) => m.id === id);
};

export const getAvailableMonsters = (): Monster[] => {
  return monsters.filter((m) => m.adoptionStatus === 'available');
};

export const getMonstersByShow = (show: 'Buffy' | 'Angel'): Monster[] => {
  return monsters.filter((m) => m.show === show);
};
