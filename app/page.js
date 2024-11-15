import LoginForm from './LoginForm';

export default function Home() {
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
        <h1>Welcome to ArenaBook!</h1>
        <h3>
          Book your game, access <br />
          favorite sports venues
        </h3>
      </div>
      <LoginForm />
    </div>
  );
}
