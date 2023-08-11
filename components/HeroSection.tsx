import React from 'react';
import Carousel from './carousel/Carousel';
import CarouselItem from './carousel/CarouselItem';

const images = ['images/pic_1.jpg', 'images/pic_2.jpg'];

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      <Carousel>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img
              src={`/${image}`}
              alt={`Image ${index}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg bg-covered" 
              style={{
                maxWidth: '100%',
                height: '50vh',
              }}
            />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
