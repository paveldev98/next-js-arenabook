import SignupForm from './SignupForm';

export default function Signup() {
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
        <h1>Signup</h1>
        <h3>
          Book your game, access <br />
          favorite sports venues
        </h3>
      </div>
      <SignupForm />
    </div>
  );
}