'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LogoutButton from './(auth)/logout/LogoutButton';

export default function HamburgerMenu({ user }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'end',
          marginRight: '0px',
          marginTop: '-150px',
          marginBottom: '-10px',
        }}
      >
        <button
          style={{ background: 'transparent', width: '100px' }}
          onClick={handleToggleSidebar}
        >
          <Image
            src="/hamburger-menu.svg"
            alt="hamburger menu"
            width={42}
            height={42}
          />
        </button>
      </div>

      <div
        style={{
          display: isSidebarVisible ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'end',
          gap: '15px',
          marginRight: '35px',
        }}
      >
        {user ? (
          <>
            <Link href="/sports" className="link">
              Sports
            </Link>
            <Link href="/bookings" className="link">
              My Bookings
            </Link>
            <Link href={`/profile/${user.username}`} className="link">
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link href="/register" className="link">
              Signup
            </Link>
            <Link href="/login" className="link">
              Login
            </Link>
          </>
        )}
      </div>
    </>
  );
}
