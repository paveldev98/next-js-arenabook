'use client';

import { useRouter } from 'next/navigation';
import { logout } from './actions';

export default function LogoutButton() {
  const router = useRouter();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '15px',
      }}
    >
      <form>
        <button
          style={{
            background: 'transparent',
            fontSize: '16px',
            padding: '0px',
            margin: '0px',
            marginRight: '16px',
            marginTop: '-120px',
          }}
          formAction={async () => {
            await logout();
            router.refresh();
          }}
        >
          Logout
        </button>
      </form>
    </div>
  );
}
