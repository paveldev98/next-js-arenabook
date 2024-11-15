'use client';

import 'react-image-lightbox/style.css';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

export default function PhotoGallery(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    `/${props.sportPicture}_image_1.png`,
    `/${props.sportPicture}_image_2.png`,
    `/${props.sportPicture}_image_3.png`,
  ];

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <div
            key={`image-${image}`}
            role="button"
            tabIndex="0"
            onClick={() => {
              setIsOpen(true);
              setPhotoIndex(index);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsOpen(true);
                setPhotoIndex(index);
              }
            }}
            style={{
              display: 'inline-block',
              cursor: 'pointer',
              margin: '10px',
            }}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              style={{ width: '250px' }}
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
