export interface Monster {
  id: number;
  name: string;
  image: string;
  bio: string;
  series: 'Buffy' | 'Angel';
}

export const monsters: Monster[] = [
  {
    id: 1,
    name: 'Vampire',
    image: '/images/vampire.gif',
    bio: 'A classic! Fangs, super strength, and a serious aversion to sunlight. Adopt one today and get a free brooding portrait.',
    series: 'Buffy',
  },
  {
    id: 2,
    name: 'Spike',
    image: '/images/spike.gif',
    bio: 'A punk-rock vampire with a heart of gold (sometimes). Loves a good fight and a good poem. Will probably steal your leather jacket.',
    series: 'Buffy',
  },
  {
    id: 3,
    name: 'Lorne',
    image: '/images/lorne.gif',
    bio: 'A friendly, karaoke-loving demon from the dimension of Pylea. He can read your aura when you sing. Just don\'t ask him to do it before 9 PM.',
    series: 'Angel',
  },
    {
    id: 4,
    name: 'The Gentlemen',
    image: '/images/gentlemen.gif',
    bio: 'Silent, dapper demons who steal your voice so you can\'t scream. They\'re great listeners, though.',
    series: 'Buffy',
  },
  {
    id: 5,
    name: 'Anya',
    image: '/images/anya.gif',
    bio: 'A former vengeance demon with a fear of bunnies. She\'s brutally honest and has a knack for capitalism. Great for helping with your finances.',
    series: 'Buffy'
  },
  {
    id: 6,
    name: 'Clem',
    image: '/images/clem.gif',
    bio: 'A loose-skinned demon who loves kittens and a good game of poker. He\'s a loyal friend and a great source of gossip.',
    series: 'Buffy',
  }
];
