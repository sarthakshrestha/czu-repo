import React from 'react';
import '../stylesheets/Canvas.css';
import imageSrc from '../images/home-image.JPG';
import imageSrc2 from '../images/image-2.JPG';
import imageSrc3 from '../images/image-3.JPG';
import imageSrc4 from '../images/image-4.JPG';
import imageSrc5 from '../images/image-5.JPG';
import imageSrc6 from '../images/image-6.JPG';

const PortfolioItem = ({ caption }) => {
  const images = [imageSrc, imageSrc2, imageSrc3, imageSrc4, imageSrc5, imageSrc6];
  const captions = ['randomg image numero uno', 'numero dos', 'numerotres', 'caption4', 'caption5', 'caption6'];

  return (
      <div className="portfolio-container">
        <div className='image-header'>
          <h1>images</h1>

    <div className='portfolio-image'>

      {images.map((image, index) => (
        <div className='image-boxes' key={index}>
          <img src={image} alt={`Portfolio Image ${index + 1}`} className='photo-box' />
          {/* <p>{captions[index]}</p> */}
        </div>
      ))}
    </div>
    </div>
      </div>
  );
};

export default PortfolioItem;
