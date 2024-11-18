import type { Session } from 'migrations/00001-sessions';
import type { Booking } from 'migrations/00004-createTableBookings.js';
import { cache } from 'react';
import { sql } from './connect';
import type { Court } from './courts';

export const createBooking = cache(
  async (
    sessionToken: Session['token'],
    singleCourtId: number,
    selected: string,
    selectedSlot: string,
  ) => {
    const [booking] = await sql<Booking[]>`
      INSERT INTO
        bookings (user_id, court_id, booking_date, booking_time) (
          SELECT
            sessions.user_id,
            ${singleCourtId},
            ${selected},
            ${selectedSlot}
          FROM
            sessions
          WHERE
            token = ${sessionToken}
            AND sessions.expiry_timestamp > now()
        )
      RETURNING
        bookings.*
    `;

    return booking;
  },
);

export type BookingWithCourt = Booking & Court;

export const getBookings = cache(async (sessionToken: string) => {
  const bookingsWithCourts = await sql<BookingWithCourt[]>`
    SELECT
      bookings.booking_id,
      bookings.booking_date,
      bookings.booking_time,
      bookings.court_id,
      courts.court_description,
      courts.court_name,
      courts.sport_category,
      courts.owner_name,
      courts.owner_initials,
      courts.owner_number
    FROM
      bookings
      INNER JOIN courts ON bookings.court_id = courts.court_id
      INNER JOIN sessions ON sessions.user_id = bookings.user_id
    WHERE
      sessions.token = ${sessionToken}
      AND sessions.expiry_timestamp > now()
  `;
  return bookingsWithCourts;
});

export const deleteBooking = cache(
  async (sessionToken: Session['token'], bookingId: number) => {
    const [deletedBooking] = await sql<Booking[]>`
      DELETE FROM bookings USING sessions
      WHERE
        sessions.token = ${sessionToken}
        AND sessions.expiry_timestamp > now()
        AND bookings.booking_id = ${bookingId}
      RETURNING
        bookings.*
    `;

    return deletedBooking;
  },
);
