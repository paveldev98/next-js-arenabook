'use client';

import type { User } from 'migrations/00000-createTableUsers';
import Link from 'next/link';
import { useState } from 'react';
import type { BookingWithCourt } from '../database/bookings';

type Props = {
  user: User;
  bookingsForUser: BookingWithCourt[];
};

export default function BookingConfirmation(props: Props) {
  const [bookings, setBookings] = useState(props.bookingsForUser);

  const handleRemoveBooking = async (bookingId: number) => {
    try {
      const response = await fetch('/api/deleteBooking', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingId }),
      });

      if (response.ok) {
        setBookings(
          bookings.filter((booking) => booking.bookingId !== bookingId),
        );
      } else {
        console.error('Failed to delete booking');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      {props.bookingsForUser.map((bookingForUser) => {
        const dateString = bookingForUser.bookingDate;
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString();
        return (
          <div key={`booking-${bookingForUser.bookingId}`}>
            <form className="booking-container">
              <h3>Owner Info</h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div className="initials-container">
                  <h3 style={{ color: '#468f73' }}>
                    {bookingForUser.ownerInitials}
                  </h3>
                </div>
                <p>
                  {bookingForUser.ownerName} <br />
                  {bookingForUser.ownerNumber}
                </p>
              </div>
              <h3>Booking Date</h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '30px',
                  marginTop: '-15px',
                }}
              >
                <img
                  alt="calendar-icon"
                  src="mdi_calendar-outline.svg"
                  className="clock"
                />
                <p>{formattedDate}</p>
              </div>
              <h3>Booking Time</h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '30px',
                  marginTop: '-15px',
                }}
              >
                <img
                  alt="clock-icon"
                  src="mdi_clock-outline.svg"
                  className="clock"
                />
                <p>{bookingForUser.bookingTime}</p>
              </div>
              <h3>Sport</h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '30px',
                  marginTop: '-15px',
                }}
              >
                <img
                  alt="sports-icon"
                  src="fluent_sport-16-regular.svg"
                  className="clock"
                />
                <p>{bookingForUser.sportCategory}</p>
              </div>
              <h3>Sports Facility</h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '30px',
                  marginTop: '-15px',
                }}
              >
                <img
                  alt="court-icon"
                  src="f7_sportscourt.svg"
                  className="clock"
                />
                <p>{bookingForUser.courtName}</p>
              </div>
              <p style={{ marginLeft: '35px', marginTop: '0px' }}>
                {bookingForUser.courtDescription}
              </p>
              <button
                className="remove-booking-btn"
                onClick={() => handleRemoveBooking(bookingForUser.bookingId)}
              >
                Remove Booking
              </button>
            </form>
          </div>
        );
      })}
    </>
  );
}
