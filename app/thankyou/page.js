import Image from 'next/image';

export default function ThankYou() {
  return (
    <div
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          marginTop: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      />
      <h1>Thank you for the booking!</h1>
      <Image
        src="/booking-confirmed.png"
        alt="booking confirmed"
        width={300}
        height={300}
      />
    </div>
  );
}
