import MyDatePicker from './MyDatePicker';

export default function Calendar() {
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
      <h1>Book date and time</h1>
      <MyDatePicker />
    </div>
  );
}
