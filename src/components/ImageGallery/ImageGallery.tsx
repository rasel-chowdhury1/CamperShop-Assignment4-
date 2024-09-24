import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { IMPRIMANTE_PANTUM_M6559N, IMPRIMANTE_PANTUM_M6609N, IMPRIMANTE_PANTUM_P2509, IMPRIMANTE_PANTUM_P2509W, IMPRIMANTE_PANTUM_P3300DN, IMPRIMANTE_PANTUM_P3300DW } from '../../assets/images';


const ImageGallery: React.FC = () => {
  const productImages = [
    {
      smallSrc: IMPRIMANTE_PANTUM_P2509, // Smaller image for the gallery
      largeSrc: IMPRIMANTE_PANTUM_M6559N, // High-resolution image for magnification
    },
    {
      smallSrc: IMPRIMANTE_PANTUM_P2509W,
      largeSrc: IMPRIMANTE_PANTUM_P3300DW,
    },
    {
      smallSrc: IMPRIMANTE_PANTUM_P3300DN,
      largeSrc: IMPRIMANTE_PANTUM_M6609N,
    },
    // Add more images as needed
  ];

  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Product Gallery</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {productImages.map((image, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: `Product Image ${index + 1}`,
                  isFluidWidth: true,
                  src: image.smallSrc,
                },
                largeImage: {
                  src: image.largeSrc,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: '150%',
                  height: '150%',
                },
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
