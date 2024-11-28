'use client';

import { CldUploadWidget } from 'next-cloudinary';

export default function UploadImage() {
  const handleUploadSuccess = () => {
    window.location.reload();
  };
  return (
    <div style={{ marginRight: '50px' }}>
      <CldUploadWidget
        uploadPreset="next_cloudinary_pj"
        onSuccess={handleUploadSuccess}
      >
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
