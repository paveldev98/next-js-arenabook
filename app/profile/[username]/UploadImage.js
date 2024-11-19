'use client';

import { CldUploadWidget } from 'next-cloudinary';

export default function UploadImage() {
  return (
    <div style={{ marginRight: '50px' }}>
      <CldUploadWidget uploadPreset="next_cloudinary_pj">
        {({ open }) => {
          return (
            <button className="image-upload-btn" onClick={() => open()}>
              Upload Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
