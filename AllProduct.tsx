import React from 'react';
import ProductCard from './components/ProductCards/ProductCards'; // Make sure to adjust the import path

const Products: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ProductCard
        imageSrc="/path/to/your/image.jpg"
        productName="Product Name"
        id="123456"
        price="$0.83/each"
        savings="4.60"
        supplier="ABC Supplier"
        deliveryDate="20 Oct 2023"
      />
    </div>
  );
};

export default Products;
