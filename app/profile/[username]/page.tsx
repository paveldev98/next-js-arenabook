import { getUser } from '@/app/database/users';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { getCookie } from 'util/cookies';
import ImageDisplay from './ImageDisplay';
import SportsSelection from './SportsSelection';
import UploadImage from './UploadImage';

type Props = {
  params: Promise<{
    username: string;
  }>;
};

export default async function UserProfilePage(props: Props) {
  const { username } = await props.params;

  return (
    <div
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {' '}
      <Image
        style={{ marginTop: '100px' }}
        src="/user.svg"
        alt="user profile"
        width={62}
        height={62}
      />
      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.6)',
          border: '2px solid #468f73',
          width: '400px',
          marginBottom: '60px',
          paddingTop: '20px',
        }}
      >
        {' '}
        <ImageDisplay />
        <h1>
          <span>{username}</span>
        </h1>
        <UploadImage />
        <h2>Add info</h2>
        <SportsSelection />
      </div>
    </div>
  );
}
