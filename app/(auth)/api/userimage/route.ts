import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req: Request) {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 1,
      sort_by: 'uploaded_at',
      direction: 'desc',
    });

    if (result.resources.length === 0) {
      return new Response(JSON.stringify({ error: 'No images found' }), {
        status: 404,
      });
    }

    const latestImage = result.resources[0];
    return new Response(JSON.stringify({ publicId: latestImage.public_id }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching latest image:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch the latest image' }),
      { status: 500 },
    );
  }
}
