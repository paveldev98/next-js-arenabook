'use client';

import type { User } from 'migrations/00000-createTableUsers';
import Link from 'next/link';
import type { BookingWithCourt } from '../database/bookings';

type Props = {
  user: User;
  bookingsForUser: BookingWithCourt[];
};

export default function BookingConfirmation(props: Props) {
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

              <button className="confirm-booking-btn">Confirm Booking</button>
              <button className="remove-booking-btn">Remove Booking</button>
            </form>
          </div>
        );
      })}
    </>
  );
}
