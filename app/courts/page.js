import CourtCart from './CourtCart';

export default function Courts() {
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
        }}
      >
        <h1>BOOK YOUR GAME</h1>
      </div>
      <CourtCart />
    </div>
  );
}
