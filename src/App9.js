import { useState } from 'react';

import ImageCarousel2 from './ImageCarousel2';
import './image-carousel2.css'
import FileExplorer2 from './FileExplorer2';
const images = [
  {
    src: 'https://picsum.photos/id/600/600/400',
    alt: 'Forest',
  },
  {
    src: 'https://picsum.photos/id/100/600/400',
    alt: 'Beach',
  },
  {
    src: 'https://picsum.photos/id/200/600/400',
    alt: 'Yak',
  },
  {
    src: 'https://picsum.photos/id/300/600/400',
    alt: 'Hay',
  },
  {
    src: 'https://picsum.photos/id/400/600/400',
    alt: 'Plants',
  },
  {
    src: 'https://picsum.photos/id/500/600/400',
    alt: 'Building',
  },
];

export default function App() {
  const [message, setMessage] = useState('Image Carousel');

  return (
    <div className='main'>
      <FileExplorer2></FileExplorer2>
    </div>
  );
}