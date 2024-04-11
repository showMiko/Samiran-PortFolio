import React, { useState } from 'react';

const GalleryCard = ({ data }) => {
  const [maximizedImage, setMaximizedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setMaximizedImage(imageSrc);
  };

  const handleMaximizedImageClose = () => {
    setMaximizedImage(null);
  };

  return (
    <div className="flex min-h-screen w-full flex-wrap content-center justify-center p-5 bg-gray-200 z-10">
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item, index) => (
          <div key={index} className="relative bg-white p-3">
            <img
              className="h-52 w-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
              src={item.imageSrc}
              alt={`Image ${index}`}
              onClick={() => handleImageClick(item.imageSrc)}
            />
           
          </div>
        ))}
      </div>
      {maximizedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <img
            className="max-h-full max-w-full"
            style={{maxHeight:"80%",maxWidth:"90%"}}
            src={maximizedImage}
            alt="Maximized"
            onClick={handleMaximizedImageClose}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryCard;
