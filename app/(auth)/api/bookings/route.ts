import { createBooking, deleteBooking } from '@/app/database/bookings';
import {
  type Booking,
  bookingSchema,
} from 'migrations/00004-createTableBookings';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { getCookie } from 'util/cookies';

export type CreateBookingResponseBodyPost =
  | {
      booking: { selectedSlot: Booking['selectedSlot'] };
    }
  | {
      error: string;
    };

export async function POST(
  request: Request,
): Promise<NextResponse<CreateBookingResponseBodyPost>> {
  // Task: Create a booking for the current logged in user
  // 1. Get the booking data from the request.
  const body = await request.json();
  // 2. Validate bookings data with zod.
  const result = bookingSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Request does not contain booking object' },
      {
        status: 400,
      },
    );
  }
  // 3. Get the token from the cookie.
  const sessionTokenCookie = await getCookie('sessionToken');
  // 4. Create the booking
  const newBooking =
    sessionTokenCookie &&
    (await createBooking(
      sessionTokenCookie,
      result.data.singleCourtId,
      result.data.selected,
      result.data.selectedSlot,
    ));

  console.log('Booking: ', newBooking);

  // 5. If the booking creation fails, return an error.
  if (!newBooking) {
    return NextResponse.json(
      { error: 'Booking not created or access denied creating booking' },
      {
        status: 400,
      },
    );
  }

  // 6. Return the text content of the booking.

  return NextResponse.json({
    booking: { selectedSlot: newBooking.selectedSlot },
  });
}
