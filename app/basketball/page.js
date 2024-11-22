import Image from 'next/image';
import Link from 'next/link';
import { getBasketballCourtsInsecure } from '../database/courts';

export default async function Courts() {
  const basketballCourts = await getBasketballCourtsInsecure();

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '80px',
          marginBottom: '20px',
        }}
      >
        <h1>BOOK YOUR GAME</h1>
      </div>
      <div
        style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '50px',
          alignItems: 'center',
          marginBottom: '100px',
        }}
      >
        {basketballCourts.map((basketballCourt) => {
          return (
            <div
              key={`football-courts-${basketballCourt.courtId}`}
              className="court-cart"
            >
              <div
                style={{
                  width: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  src={basketballCourt.courtImg}
                  alt={basketballCourt.courtName}
                  style={{ width: '230px', height: '200px' }}
                />
              </div>
              <p className="court-name">{basketballCourt.courtName}</p>
              <p className="court-description">
                {basketballCourt.courtDescription}
              </p>
              <Link
                href={`/${basketballCourt.courtId}`}
                className="link-court-details"
                style={{ marginTop: '10px' }}
              >
                See details
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
