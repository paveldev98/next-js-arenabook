import Image from 'next/image';
import Link from 'next/link';
import { getVolleyballCourtsInsecure } from '../database/courts';

export default async function Courts() {
  const volleyballCourts = await getVolleyballCourtsInsecure();

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
        {volleyballCourts.map((volleyballCourt) => {
          return (
            <div
              key={`football-courts-${volleyballCourt.courtId}`}
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
                  src={volleyballCourt.courtImg}
                  alt={volleyballCourt.courtName}
                  width={260}
                  height={170}
                />
              </div>
              <p className="court-name">{volleyballCourt.courtName}</p>
              <p className="court-description" style={{ textAlign: 'center' }}>
                {volleyballCourt.courtDescription}
              </p>
              <Link
                href={`/${volleyballCourt.courtId}`}
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
