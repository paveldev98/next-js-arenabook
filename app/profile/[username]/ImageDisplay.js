'use client';

import { CldImage } from 'next-cloudinary';

const imagePublicId = 'ygnaah2wnstins1nlicb';

export default function ImageDisplay() {
  return (
    <div>
      {imagePublicId && (
        <CldImage
          style={{
            borderRadius: '50%',
            border: '2px solid #468f73',
            boxShadow: '0px 4px 8px rgba(70, 143, 115, 0.6)',
          }}
          src={imagePublicId}
          width="150"
          height="150"
          alt="Uploaded image"
          crop="fill"
          gravity="auto"
        />
      )}
    </div>
  );
}
