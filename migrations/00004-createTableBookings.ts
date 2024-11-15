import type { Sql } from 'postgres';
import { z } from 'zod';

export type Booking = {
  bookingId: number;
  bookingDate: string;
  bookingTime: string;
  userId: number;
  singleCourtId: number;
  selected: string;
  selectedSlot: string;
};

export const bookingSchema = z.object({
  singleCourtId: z.number(),
  selected: z.string(),
  selectedSlot: z.string(),
});

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE bookings (
      booking_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      user_id integer NOT NULL REFERENCES users (id) ON DELETE cascade,
      court_id integer NOT NULL REFERENCES courts (court_id) ON DELETE cascade,
      booking_date varchar(150) NOT NULL,
      booking_time varchar(50)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE bookings`;
}
