import { useState } from 'react';
import './image-carousel2.css';
import 'boxicons';
export default function ImageCarousel({ images }) {
    const [visible, setVisible] = useState(0);

    const handleChange = (direction) => {
        if(direction === 'prev') {
            if(visible > 0) setVisible(visible - 1)
        } else {
            if(visible < Object.keys(images).length - 1) setVisible(visible + 1)
        }
    }
    return (
      <div className='carousel'>
        {images.map(({ alt, src }, index) => (
          <img className={index === visible ? '' : 'hidden'} key={src} alt={alt} src={src} width="100%" />
        ))}
        <button className='previous' onClick={() => handleChange('prev')}>Previous</button><button className='next' onClick={() => handleChange('next')}>Next</button>
        <div className='circle-container'>{images.map((img, index) => (
             <span className='circle' onClick={() => setVisible(index)}> </span>
        ))}</div>
      </div>
    );
  }
  