import Image from 'next/image';
import Link from 'next/link';
import { getSquashCourtsInsecure } from '../database/courts';

export default async function Courts() {
  const squashCourts = await getSquashCourtsInsecure();

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
        {squashCourts.map((squashCourt) => {
          return (
            <div
              key={`football-courts-${squashCourt.courtId}`}
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
                  src={squashCourt.courtImg}
                  alt={squashCourt.courtName}
                  width={260}
                  height={170}
                />
              </div>
              <p className="court-name">{squashCourt.courtName}</p>
              <p className="court-description" style={{ textAlign: 'center' }}>
                {squashCourt.courtDescription}
              </p>
              <Link
                href={`/${squashCourt.courtId}`}
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
