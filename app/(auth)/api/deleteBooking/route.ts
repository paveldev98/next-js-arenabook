import { deleteBooking } from '@/app/database/bookings';
import {
  type Booking,
  bookingSchema,
} from 'migrations/00004-createTableBookings';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { getCookie } from 'util/cookies';

export type BookingResponseBodyDelete =
  | {
      booking: { bookingId: Booking['bookingId'] };
    }
  | {
      error: string;
    };

export async function DELETE(
  request: NextRequest,
): Promise<NextResponse<BookingResponseBodyDelete>> {
  const { bookingId } = await request.json();
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  const booking =
    sessionTokenCookie &&
    (await deleteBooking(sessionTokenCookie.value, bookingId));

  if (!booking) {
    return NextResponse.json(
      {
        error: 'Booking not found',
      },
      {
        status: 404,
      },
    );
  }

  console.log(booking);

  return NextResponse.json({
    booking: { bookingId: booking.bookingId },
  });
}
