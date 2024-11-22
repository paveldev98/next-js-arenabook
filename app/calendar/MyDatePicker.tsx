'use client';

import 'react-day-picker/style.css';
import type { Booking } from 'migrations/00004-createTableBookings';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import type { CreateBookingResponseBodyPost } from '../(auth)/api/bookings/route';
import ErrorMessage from '../ErrorMessage';
import styles from './MyDatePicker.module.css';

type Props = {
  bookings: Booking[];
  singleCourtId: number;
};

export default function MyDatePicker(props: Props) {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const router = useRouter();

  const singleCourtId = props.singleCourtId;

  const handleSlotChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSlot(event.target.value);
  };

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const response = await fetch('/api/bookings', {
            method: 'POST',
            body: JSON.stringify({
              singleCourtId,
              selected,
              selectedSlot,
            }),
          });

          setSuccessMessage('Booking Successful!');

          setErrorMessage('');

          if (!response.ok) {
            const responseBody: CreateBookingResponseBodyPost =
              await response.json();

            if ('error' in responseBody) {
              setErrorMessage(responseBody.error as string);
              return;
            }
          }

          setSelected(undefined);
          setSelectedSlot('');

          router.push('/thankyou');
          router.refresh();
        }}
      >
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={
            selected
              ? `Selected: ${selected.toLocaleDateString()}`
              : 'Pick a day.'
          }
          className={styles['rdp-root']}
        />

        <label htmlFor="slots">
          <h2>Choose a slot:</h2>
        </label>

        <select name="slots" id="slots" required onChange={handleSlotChange}>
          <option value="7h to 8h">from 7h to 8h</option>
          <option value="8h to 9h">from 8h to 9h</option>
          <option value="9h to 10h">from 9h to 10h</option>
          <option value="10h to 11h">from 10h to 11h</option>
          <option value="11h to 12h">from 11h to 12h</option>
          <option value="12h to 13h">from 12h to 13h</option>
          <option value="13h to 14h">from 13h to 14h</option>
          <option value="14h to 15h">from 14h to 15h</option>
          <option value="15h to 16h">from 15h to 16h</option>
          <option value="16h to 17h">from 16h to 17h</option>
          <option value="17h to 18h">from 17h to 18h</option>
          <option value="18h to 19h">from 18h to 19h</option>
          <option value="19h to 20h">from 19h to 20h</option>
          <option value="20h to 21h">from 20h to 21h</option>
          <option value="21h to 22h">from 21h to 22h</option>
        </select>
        <h2>Selected: {selectedSlot}</h2>
        <button
          style={{ marginTop: '60px', marginBottom: '40px' }}
          className="link-court-details"
        >
          Book slot
        </button>
      </form>
      <p>{successMessage}</p>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
}
