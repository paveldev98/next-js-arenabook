import Image from 'next/image';
import Link from 'next/link';
import { getPilatesCourtsInsecure } from '../database/courts';

export default async function Courts() {
  const pilatesCourts = await getPilatesCourtsInsecure();

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
        <h1>BOOK YOUR SESSION</h1>
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
        {pilatesCourts.map((pilatesCourt) => {
          return (
            <div
              key={`football-courts-${pilatesCourt.courtId}`}
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
                  src={pilatesCourt.courtImg}
                  alt={pilatesCourt.courtName}
                  width={260}
                  height={170}
                />
              </div>
              <p className="court-name">{pilatesCourt.courtName}</p>
              <p className="court-description" style={{ textAlign: 'center' }}>
                {pilatesCourt.courtDescription}
              </p>
              <Link
                href={`/${pilatesCourt.courtId}`}
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
