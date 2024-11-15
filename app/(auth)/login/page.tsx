import { getValidSessionToken } from '@/app/database/sessions';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginFormNew from './LoginFormNew';

export default async function LoginPage() {
  // 1. Check if the sessionToken cookie exists
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // 2. Check if the sessionToken cookie is still valid
  const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value));

  // 3. If the sessionToken cookie is valid, redirect to home

  if (session) {
    redirect('/sports');
  }

  // 4. If the sessionToken is invalid or doesn't exist, show the login form

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
        <h1>Login</h1>
        <h3>
          Book your game, access <br />
          favorite sports venues
        </h3>
      </div>
      <LoginFormNew />
    </div>
  );
}
