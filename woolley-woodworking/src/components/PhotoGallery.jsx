import React from 'react';

const PhotoGallery = ({ images }) => {
  return (
    <div className="photo-gallery grid gap-4 grid-cols-3">
      {images.map((image, index) => (
        <img key={index} src={image} alt="Gallery Image" className='object-cover w-full h-full' />
      ))}
    </div>
  );
};

export default PhotoGallery;


