'use client';

import ErrorMessage from '@/app/ErrorMessage';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { LoginResponseBody } from '../api/login/route';

export default function LoginFormNew() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  const router = useRouter();

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data: LoginResponseBody = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    router.push('/sports');

    router.refresh();
  }

  return (
    <div>
      <form onSubmit={async (event) => await handleLogin(event)}>
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
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
        />
        <button className="link-court-details">Login</button>

        <Link href="/register" className="signup-button" type="button">
          Sign Up
        </Link>

        {errors.map((error) => (
          <div className="error" key={`error-${error.message}`}>
            <ErrorMessage>{error.message}</ErrorMessage>
          </div>
        ))}
      </form>
    </div>
  );
}
