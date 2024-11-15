import Image from 'next/image';
import Link from 'next/link';

export default function ChooseSport() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          background: 'transparent',
          width: '100%',
          height: '160px',
          color: 'white',
        }}
      >
        <div>
          <Link href="/football" className="sport-container">
            <Image
              src="icons8_football2.svg"
              alt="sport-football"
              width={52}
              height={52}
              style={{ marginBottom: '10px' }}
            />
            Football
          </Link>
        </div>
        <div>
          <Link href="/basketball" className="sport-container">
            <Image
              src="fluent-emoji-high-contrast_basketball.svg"
              alt="sport-basketball"
              width={52}
              height={52}
              style={{ marginBottom: '10px' }}
            />
            Basketball
          </Link>
        </div>
        <div>
          <Link href="/volleyball" className="sport-container">
            <Image
              src="solar_volleyball-outline.svg"
              alt="sport-volleyball"
              width={52}
              height={52}
              style={{ marginBottom: '10px' }}
            />
            Volleyball
          </Link>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          background: 'transparent',
          width: '100%',
          height: '160px',
          color: 'white',
        }}
      >
        <div>
          <Link href="/tennis" className="sport-container">
            <Image
              src="emojione-monotone_tennis.svg"
              alt="sport-tennis"
              width={52}
              height={52}
              style={{ marginBottom: '10px' }}
            />
            Tennis
          </Link>
        </div>
        <div>
          <Link href="/squash" className="sport-container">
            <Image
              src="mdi_squash.svg"
              alt="sport-squash"
              width={52}
              height={52}
              style={{ marginBottom: '10px' }}
            />
            Squash
          </Link>
        </div>
        <div>
          <Link href="/golf" className="sport-container">
            <Image
              src="material-symbols-light_golf-course-rounded.svg"
              alt="sport-golf"
              width={52}
              height={52}
              style={{ marginBottom: '10px' }}
            />
            Golf
          </Link>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          background: 'transparent',
          width: '100%',
          height: '160px',
          color: 'white',
        }}
      >
        <div>
          <Link href="/boxing" className="sport-container">
            <Image
              src="emojione-monotone_boxing-glove.svg"
              alt="sport-boxing"
              width={52}
              height={52}
              style={{ marginBottom: '10px' }}
            />
            Boxing
          </Link>
        </div>
        <div>
          <Link href="/yoga" className="sport-container">
            <Image
              src="hugeicons_yoga-mat.svg"
              alt="sport-yoga"
              width={52}
              height={52}
              style={{ marginBottom: '10px' }}
            />
            Yoga
          </Link>
        </div>
        <div>
          <Link href="/pilates" className="sport-container">
            <Image
              src="guidance_pilates.svg"
              alt="sport-pilates"
              width={52}
              height={52}
              style={{ marginBottom: '10px' }}
            />
            Pilates
          </Link>
        </div>
      </div>
    </>
  );
}
