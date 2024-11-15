import Link from 'next/link';
import MyDatePicker from '../calendar/MyDatePicker';
import { getSingleCourtInsecure } from '../database/courts';
import PhotoGallery from './PhotoGallery';

export default async function Court(props) {
  const singleCourt = await getSingleCourtInsecure(
    Number((await props.params).courtId),
  );

  const singleCourtId = Number((await props.params).courtId);

  console.log(singleCourtId);

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
          marginBottom: '60px',
        }}
      >
        <PhotoGallery sportPicture={singleCourt.sportCategory} />
        <h2>{singleCourt.courtName}</h2>
        <p>{singleCourt.courtDescription}</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3>{singleCourt.ownerInfo}</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div className="initials-container">
              <h3 style={{ color: '#468f73' }}>{singleCourt.ownerInitials}</h3>
            </div>
            <p>
              {singleCourt.ownerName} <br />
              {singleCourt.ownerNumber}
            </p>
          </div>
          <h3>Price Info</h3>
          <h3>{singleCourt.pricePerHour}€/hr</h3>
          <p>Monday - Friday</p>
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
            <p>{singleCourt.workingHours}</p>
          </div>
          <p>Saturday - Sunday</p>
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
            <p>{singleCourt.weekendHours}</p>
          </div>
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
            <MyDatePicker singleCourtId={singleCourtId} />
          </div>
        </div>
      </div>
    </div>
  );
}
