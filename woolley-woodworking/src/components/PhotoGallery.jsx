import React, { useState } from 'react';


const PhotoGallery = ({ images }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className='flex justify-center bg-gray-200 '>
        <button className='absolute px-6 py-1 bg-tan text-cream rounded-xl hover:text-gray-800 mx-auto w-2/3 mt-4 text-center' onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? 'Show' : 'Hide'} Gallery
        </button>
        {!isCollapsed && (
            <div className="photo-gallery grid gap-4 grid-cols-3 mt-4 py-12">
                {images.map((image, index) => (
                  <img key={index} src={image} alt="Gallery Image" className='object-cover w-full h-full' />
                ))}
            </div>
          )}
    </div>
  );
};

export default PhotoGallery;

