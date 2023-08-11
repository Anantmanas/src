import React, { useState, useRef, useEffect } from 'react';

interface CarouselProps {
  children: React.ReactNodeArray;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numItems = React.Children.count(children);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? numItems - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === numItems - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-300"
        style={{ width: `${numItems * 100}%` }}
      >
        {children}
      </div>
      <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2">
        Previous
      </button>
      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2">
        Next
      </button>
    </div>
  );
};

export default Carousel;
