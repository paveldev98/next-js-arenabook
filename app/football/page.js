import Image from 'next/image';
import Link from 'next/link';
import { getFootballCourtsInsecure } from '../database/courts';

export default async function Courts() {
  const footballCourts = await getFootballCourtsInsecure();

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
        {footballCourts.map((footballCourt) => {
          return (
            <div
              key={`football-courts-${footballCourt.courtId}`}
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
                  src={footballCourt.courtImg}
                  alt={footballCourt.courtName}
                  width={260}
                  height={170}
                />
              </div>
              <p className="court-name">{footballCourt.courtName}</p>
              <p className="court-description">
                {footballCourt.courtDescription}
              </p>
              <Link
                href={`/${footballCourt.courtId}`}
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
