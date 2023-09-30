import React, { useEffect, useRef, useState } from 'react';

import Raw12 from "../assests/RAW12.jpeg"
import Raw14 from "../assests/RAW14.jpeg"
import Raw27 from "../assests/RAW27.jpg"
import Raw29 from "../assests/RAW29.jpg"
import Raw17 from "../assests/RAW17.jpg"

const Gallery = () => {
  const galleryImages = [
    Raw12,
    Raw14,
    Raw27,
    Raw12,
    Raw29,
    Raw17,
    Raw12,
    Raw14,
    Raw27,
    "https://images.unsplash.com/photo-1565799515768-2dcfd834625c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1838&q=80"
    
  ];

  const topElementRef = useRef(null);

  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageExpand = (imageUrl) => {
    setExpandedImage(imageUrl);
  };

  const handleCloseImage = () => {
    setExpandedImage(null);
  };

  useEffect(() => {
    topElementRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-gray-100 pb-16">
      <div ref={topElementRef} />
      <div className='h-25% w-full   about ' style={{ height: "65vh" }}>
        <img
          src="https://images.unsplash.com/photo-1565799515768-2dcfd834625c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1838&q=80"
          alt=""
          srcSet=""
          className='w-full object-cover'
          style={{ height: '100%' }}
        />
      </div>

      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center my-8  mt-16 font-serif">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 md:mx-0 aspect-h-1">
          {galleryImages.map((imageUrl, index) => (
            <div key={index} className="gallery-item relative"> {/* Adjust the height here */}
              <img
                src={imageUrl}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleImageExpand(imageUrl)}
              />
              <div
                className={`overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition-opacity duration-300 ${
                  expandedImage ? 'hidden' : ''
                }`}
              >
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-black"
                  onClick={() => handleImageExpand(imageUrl)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
        {expandedImage && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="max-w-3xl mx-auto">
              <img
                src={expandedImage}
                alt="Expanded Image"
                className="w-full h-auto rounded-lg shadow-lg relative z-50 mt-7"
              />
              <button
                className="absolute top-24 left-84 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition z-50"
                onClick={handleCloseImage}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
