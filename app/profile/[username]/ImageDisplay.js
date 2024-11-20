'use client';
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react';

export default function ImageDisplay() {
  const [latestImageId, setLatestImageId] = useState(null);

  useEffect(() => {
    const fetchLatestImage = async () => {
      try {
        const response = await fetch('/api/userimage');
        if (!response.ok) {
          console.error('API returned an error:', response.statusText);
          return;
        }

        const data = await response.json();
        if (data.publicId) {
          setLatestImageId(data.publicId);
        } else {
          console.error('No publicId in response');
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchLatestImage();
  }, []);

  return (
    <div>
      {latestImageId && (
        <img
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '2px solid #468f73',
            boxShadow: '0px 4px 8px rgba(70, 143, 115, 0.6)',
          }}
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${latestImageId}.jpg`}
          alt="Latest Image"
        />
      )}
    </div>
  );
}
