import React from 'react';
import '../stylesheets/Canvas.css';
import imageSrc from '../print-images/1.png';
import imageSrc2 from '../print-images/2.png';
import imageSrc3 from '../print-images/3.png';
import imageSrc4 from "../print-images/4.png";
import imageSrc5 from "../print-images/5.png";
import imageSrc6 from "../print-images/6.png";
import imageSrc7 from "../print-images/7.png";
import imageSrc8 from "../print-images/8.png";
import imageSrc9 from "../print-images/9.png";
import imageSrc10 from "../print-images/10.png";
import imageSrc11 from "../print-images/11.png";
import imageSrc12 from "../print-images/12.png";

const PrintItem = ({ caption }) => {
  const images = [imageSrc, imageSrc2, imageSrc3, imageSrc4, imageSrc5, imageSrc6, imageSrc7, imageSrc8, imageSrc9, imageSrc10, imageSrc11, imageSrc12];
  const captions = ['randomg image numero uno', 'numero dos', 'numerotres', 'caption4', 'caption5', 'caption6', 'caption7', 'caption8', 'caption9', 'caption10', 'caption11', 'caption12'];

  return (
      <div className='print-header'>
        <h1>prints</h1>
        <div className='print-image'>
          {images.map((image, index) => (
              <div className='image-box' key={index}>
                <img src={image} alt={`Portfolio Image ${index + 1}`} className='photo-box'/>
                {/* <p>{captions[index]}</p> */}
              </div>
          ))}
        </div>
      </div>
  );
};

export default PrintItem;
