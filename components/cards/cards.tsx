import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img src={imageSrc} alt={title} className="w-full h-32 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>



  );
};

export default Card;
