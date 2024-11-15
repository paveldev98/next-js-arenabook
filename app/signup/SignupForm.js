'use client';

import Link from 'next/link';

export default function SignupForm() {
  return (
    <div>
      <form>
        {/* <label htmlFor="email">Enter email</label> */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        {/* <label htmlFor="password">Password</label> */}
        <input
          type="password"
          id="create-password"
          name="password"
          placeholder="Create Password"
          required
        />
        <input
          type="password"
          id="confirm-password"
          name="password"
          placeholder="Confirm Password"
          required
        />
        <input
          type="number"
          id="phone-number"
          name="number"
          placeholder="Phone Number"
        />
        <Link href="/" className="link-court-details">
          Signup
        </Link>
      </form>
    </div>
  );
}
