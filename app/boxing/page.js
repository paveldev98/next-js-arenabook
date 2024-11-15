import Image from 'next/image';
import Link from 'next/link';
import { getBoxingCourtsInsecure } from '../database/courts';

export default async function Courts() {
  const boxingCourts = await getBoxingCourtsInsecure();

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
        <h1>BOOK YOUR FIGHT</h1>
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
        {boxingCourts.map((boxingCourt) => {
          return (
            <div
              key={`football-courts-${boxingCourt.courtId}`}
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
                  src={boxingCourt.courtImg}
                  alt={boxingCourt.courtName}
                  width={260}
                  height={170}
                />
              </div>
              <p className="court-name">{boxingCourt.courtName}</p>
              <p className="court-description" style={{ textAlign: 'center' }}>
                {boxingCourt.courtDescription}
              </p>
              <Link
                href={`/${boxingCourt.courtId}`}
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
