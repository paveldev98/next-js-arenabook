import SportsSelection from './SportsSelection';

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
      <div
        style={{
          marginTop: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.6)',
          border: '2px solid #468f73',
          width: '400px',
          marginBottom: '60px',
        }}
      >
        {' '}
        <h1>
          <span style={{ color: '#78ccac' }}>{username}'s profile</span>
        </h1>
        <h2>Add info</h2>
        <SportsSelection />
      </div>
    </div>
  );
}
