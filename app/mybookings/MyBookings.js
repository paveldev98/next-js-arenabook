import Link from 'next/link';

export default function MyBookings() {
  return (
    <div className="booking-container">
      <h3>Owner Info</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div className="initials-container">
          <h3 style={{ color: '#468f73' }}>JP</h3>
        </div>
        <p>
          Jason Prichard <br />
          01 312 555 0927
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
        <p>23 October, 2024</p>
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
        <img alt="clock-icon" src="mdi_clock-outline.svg" className="clock" />
        <p>7AM - 8AM</p>
        <h3>10€/hr</h3>
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
        <p>Football</p>
      </div>
      <h3>Sports Facility</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: '',
          alignItems: 'center',
          gap: '30px',
          marginTop: '-15px',
        }}
      >
        <img alt="court-icon" src="f7_sportscourt.svg" className="clock" />
        <p>Emerald Turf Court</p>
      </div>
      <p style={{ marginLeft: '35px', marginTop: '0px' }}>
        123 Victory Lane,
        <br />
        Greenfield Park,
        <br /> Summit City, 89012
      </p>

      <Link href="/" className="link-court-details">
        Remove Booking
      </Link>
    </div>
  );
}
