import React from 'react';
import Card from './cards/cards'; // Make sure to adjust the import path

const Category: React.FC = () => {
    return (
        <>
            <div className='flex justify-center justify-space-between'>
                <div className="flex justify-center items-center h-screen">
                    <Card imageSrc="/path/to/your/image.jpg" title="Food and Beverages" />
                </div>
                <div className="flex justify-center items-center h-screen">
                    <Card imageSrc="/path/to/your/image.jpg" title="Office Furniture" />
                </div>
                <div className="flex justify-center items-center h-screen">
                    <Card imageSrc="/path/to/your/image.jpg" title="Cleaning Product" />
                </div>
                <div className="flex justify-center items-center h-screen">
                    <Card imageSrc="/path/to/your/image.jpg" title="Eelectrical Engineering" />
                </div>
                <div className="flex justify-center items-center h-screen">
                    <Card imageSrc="/path/to/your/image.jpg" title="Office supplies" />
                </div>
            </div>

        </>

    );
};

export default Category;
