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
      src: '/static/images/projects.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: `I've worked on`,
    title: 'Management system',
    image: {
      src: '/static/images/hotel-management.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I've worked on`,
    title: 'Reservation system',
    image: {
      src: '/static/images/room-reservation.webp',
      width: 600,
      height: 717,
    },
  },
];
