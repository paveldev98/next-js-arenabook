'use client';

import type { CreateProfileResponseBodyPost } from '@/app/(auth)/api/profiles/route';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function UserProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [userRole, setUserRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const router = useRouter();

  return (
    <>
      <div>
        <form
          onSubmit={async (event) => {
            event.preventDefault();

            const response = await fetch('/api/profiles', {
              method: 'POST',
              body: JSON.stringify({
                firstName,
                lastName,
                age,
                userRole,
              }),
            });

            if (!response.ok) {
              let responseBody;
              try {
                responseBody = await response.json();
              } catch (error) {
                setErrorMessage('Unexpected server error.');
                return;
              }

              if (responseBody && 'error' in responseBody) {
                setErrorMessage(responseBody.error);
                return;
              }
            }

            router.refresh();
            setSuccessMessage('Profile Update Successful!');
          }}
        >
          <input
            id="first-name"
            name="first-name"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            required
          />
          <input
            id="last-name"
            name="last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            required
          />
          <input
            id="age"
            name="age"
            placeholder="Age"
            value={age}
            onChange={(event) => setAge(event.currentTarget.value)}
          />
          <input
            id="role"
            name="role"
            placeholder="Role"
            value={userRole}
            onChange={(event) => setUserRole(event.currentTarget.value)}
            required
          />
          <button className="update-profile-btn">Update Profile</button>
          <p>{successMessage}</p>
        </form>
      </div>
    </>
  );
}
