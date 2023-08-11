import React, { useState } from 'react';

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  id: string;
  price: string;
  savings: string;
  supplier: string;
  deliveryDate: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productName,
  id,
  price,
  savings,
  supplier,
  deliveryDate,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleQuantityChange = (amount: number) => {
    if (quantity + amount > 0) {
      setQuantity(quantity + amount);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      <div className="flex justify-center items-center mb-4">
        <img src={imageSrc} alt={productName} className="w-24 h-24 object-contain" />
      </div>
      <h2 className="text-lg font-semibold mb-2">{productName}</h2>
      <p className="text-muted mb-2">ID: {id}</p>
      <p className="mb-2">{price}</p>
      <p className="text-green-500 mb-2">Saving: {savings}%</p>
      <p className="text-muted mb-2">Supplier: {supplier}</p>
      <p className="text-muted mb-2">Deliver by: {deliveryDate}</p>
      <div className="flex items-center mb-4">
        <button
          className="bg-gray-200 px-2 py-1 mr-2"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          className="bg-gray-200 px-2 py-1 ml-2"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
        <button
          className="ml-auto p-1"
          onClick={toggleFavorite}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <button className="bg-blue-500 text-white rounded-md py-1 px-4 w-full">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
