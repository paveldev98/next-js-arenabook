import { redirect } from 'next/navigation';
import { getCookie } from 'util/cookies';
import { getBookings } from '../database/bookings';
import { getUser } from '../database/users';
import BookingConfirmation from './BookingConfirmation';

export default async function MyPlays() {
  // Task: Restrict access to the bookings page and only display bookings belonging to the current logged in user.
  // 1. Check if the sessionToken cookie exists.
  const sessionTokenCookie = await getCookie('sessionToken');
  // 2. Query user with the sessionToken.
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie));
  // 3. If the user does not exist, redirect to the login with the returnTo query parameter.
  if (!user) {
    redirect('/login?returnTo=/bookings');
  }
  // 4. Display the notes for the current logged in user.
  const bookingsForUser = await getBookings(sessionTokenCookie);

  console.log('Bookings for user:', bookingsForUser);

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
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '60px',
          justifyContent: 'center',
          maxWidth: '95%',
        }}
      >
        {bookingsForUser.length > 0 ? (
          <BookingConfirmation user={user} bookingsForUser={bookingsForUser} />
        ) : (
          <p>No bookings found</p>
        )}
      </div>
    </div>
  );
}
