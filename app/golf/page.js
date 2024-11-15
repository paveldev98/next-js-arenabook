import Image from 'next/image';
import Link from 'next/link';
import { getGolfCourtsInsecure } from '../database/courts';

export default async function Courts() {
  const golfCourts = await getGolfCourtsInsecure();

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
        {golfCourts.map((golfCourt) => {
          return (
            <div
              key={`football-courts-${golfCourt.courtId}`}
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
                <Image
                  src={golfCourt.courtImg}
                  alt={golfCourt.courtName}
                  width={260}
                  height={170}
                />
              </div>
              <p className="court-name">{golfCourt.courtName}</p>
              <p className="court-description" style={{ textAlign: 'center' }}>
                {golfCourt.courtDescription}
              </p>
              <Link
                href={`/${golfCourt.courtId}`}
                className="link-court-details"
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