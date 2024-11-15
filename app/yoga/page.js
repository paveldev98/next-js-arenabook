import Image from 'next/image';
import Link from 'next/link';
import { getYogaCourtsInsecure } from '../database/courts';

export default async function Courts() {
  const yogaCourts = await getYogaCourtsInsecure();

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
        {yogaCourts.map((yogaCourt) => {
          return (
            <div
              key={`football-courts-${yogaCourt.courtId}`}
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
                  src={yogaCourt.courtImg}
                  alt={yogaCourt.courtName}
                  width={260}
                  height={170}
                />
              </div>
              <p className="court-name">{yogaCourt.courtName}</p>
              <p className="court-description" style={{ textAlign: 'center' }}>
                {yogaCourt.courtDescription}
              </p>
              <Link
                href={`/${yogaCourt.courtId}`}
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
