import React, { ReactNode } from 'react';

interface CarouselItemProps {
  children: ReactNode;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return (
    <div className="flex-shrink-0 w-full">{children}</div>
  );
};

export default CarouselItem;
