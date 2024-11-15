'use client';

import Link from 'next/link';

export default function LoginForm() {
  return (
    <div>
      <form>
        <Link className="link-court-details" href="/login">
          Login
        </Link>
        <Link href="/register" className="signup-button" type="button">
          Sign Up
        </Link>
      </form>
    </div>
  );
}
