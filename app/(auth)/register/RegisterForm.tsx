'use client';

import ErrorMessage from '@/app/ErrorMessage';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { RegisterResponseBody } from '../api/register/route';

type Props = { returnTo?: string | string[] };

export default function RegisterForm(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('api/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data: RegisterResponseBody = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    router.push('/sports');

    router.refresh();
  }

  return (
    <div>
      <form onSubmit={async (event) => await handleRegister(event)}>
        {/* <label htmlFor="email">User name</label> */}
        <input
          id="username"
          name="username"
          placeholder="User name"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
          required
        />
        {/* <label htmlFor="password">Password</label> */}
        <input
          type="password"
          id="create-password"
          name="password"
          placeholder="Create Password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
        />
        <button className="link-court-details">Sign Up</button>

        {errors.map((error) => (
          <div className="error" key={`error-${error.message}`}>
            <ErrorMessage>{error.message}</ErrorMessage>
          </div>
        ))}
      </form>
    </div>
  );
}
