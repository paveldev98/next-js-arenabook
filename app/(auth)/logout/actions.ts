'use server';

import { deleteSession } from '@/app/database/sessions';
import { cookies } from 'next/headers';

export async function logout() {
  // 1. Get the session token from the cookie
  const cookieStore = await cookies();

  const token = cookieStore.get('sessionToken');

  if (token) {
    // 2. Delete the session from the database based on the token
    await deleteSession(token.value);

    // 3. Delete the session cookie from the browser
    cookieStore.delete(token.name);
  }

  return;
}
