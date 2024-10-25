export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/Untitled.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: `I've worked on`,
    title: 'Management system',
    image: {
      src: '/static/images/Untitled5.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I've worked on`,
    title: 'Room reservation platform',
    image: {
      src: '/static/images/Untitled27.webp',
      width: 600,
      height: 717,
    },
  },
  // {
  //   description: `I built`,
  //   title: 'Aphex Publication',
  //   image: {
  //     src: '/static/images/publication-app.webp',
  //     width: 600,
  //     height: 717,
  //   },
  // },
];
