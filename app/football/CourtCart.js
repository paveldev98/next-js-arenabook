import Image from 'next/image';
import Link from 'next/link';

export default function CourtCart() {
  return (
    <div className="court-cart">
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          src="/court_example.png"
          alt="court-photo"
          width={260}
          height={170}
        />
      </div>
      <p className="court-name">Emerald Turf Court</p>
      <p className="court-description">
        123 Victory Lane, Greenfield Park, <br />
        Summit City, 89012
      </p>
      <Link href="/court" className="link-court-details">
        See details
      </Link>
    </div>
  );
}
