import { redirect } from 'next/navigation';
import { getCookie } from 'util/cookies';
import { getUser } from '../database/users';
import MyDatePicker from './MyDatePicker';

export default async function Calendar() {
  // 1. Check if the sessionToken cookie exists.
  const sessionTokenCookie = await getCookie('sessionToken');
  // 2. Query user with the sessionToken.
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie));
  // 3. If the user does not exist, redirect to the login with the returnTo query parameter.
  if (!user) {
    redirect('/login?returnTo=/calendar');
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
      />
      <h1>Book date and time</h1>
      <MyDatePicker />
    </div>
  );
}
