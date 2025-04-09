import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img5.jpg';

export type Item = {
  id: number;
  url: string;
  title: string;
  description: string;
  tags?: string[];
};

export const galleryItems: Item[] = [
  {
    id: 1,
    url: img1,
    title: 'Example',
    description: 'Example'
  },
  {
    id: 2,
    url: img2,
    title: 'Example',
    description: 'Example'
  },
  {
    id: 3,
    url: img3,
    title: 'Example',
    description: 'Example'
  },
  {
    id: 4,
    url: img4,
    title: 'Example',
    description: 'Example'
  },
  {
    id: 5,
    url: img5,
    title: 'Example',
    description: 'Example'
  },
  {
    id: 6,
    url: img6,
    title: 'Example',
    description: 'Example'
  }
];