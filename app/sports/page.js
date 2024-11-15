import { redirect } from 'next/navigation';
import { getCookie } from 'util/cookies';
import { getUser } from '../database/users';
import ChooseSport from './ChooseSport';

export default async function Sports() {
  // 1. Check if the sessionToken cookie exists.
  const sessionTokenCookie = await getCookie('sessionToken');
  // 2. Query user with the sessionToken.
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie));
  // 3. If the user does not exist, redirect to the login with the returnTo query parameter.
  if (!user) {
    redirect('/login?returnTo=/sports');
  }
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
        {' '}
        <h1>
          Welcome <span style={{ color: '#78ccac' }}>{user.username}!</span>
        </h1>
        <h2 style={{ marginBottom: '0px' }}>What is your interest?</h2>
        <h1>Choose your sport</h1>
      </div>
      <div className="main-container">
        <ChooseSport />
      </div>
    </div>
  );
}