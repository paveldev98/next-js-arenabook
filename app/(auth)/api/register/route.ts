import crypto from 'node:crypto';
import { createSessionInsecure } from '@/app/database/sessions';
import { createUserInsecure, getUserInsecure } from '@/app/database/users';
import bcrypt from 'bcrypt';
import { type User, userSchema } from 'migrations/00000-createTableUsers';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { secureCookieOptions } from 'util/cookies';

export type RegisterResponseBody =
  | {
      user: User;
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: Request,
): Promise<NextResponse<RegisterResponseBody>> {
  // 1. Get the user data from the request
  const requestBody = await request.json();
  // 2. Validate the user data with zod
  const result = userSchema.safeParse(requestBody);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }

  // 3. Check if user already exists in the database
  const user = await getUserInsecure(result.data.username);

  if (user) {
    return NextResponse.json(
      {
        errors: [
          {
            message: 'Username already taken',
          },
        ],
      },
      {
        status: 400,
      },
    );
  }

  // This is where you do confirm password

  // 4. Hash the plain password from the user
  const passwordHash = await bcrypt.hash(result.data.password, 12);

  // 5. Save the user information with the hashed password in the database
  const newUser = await createUserInsecure(result.data.username, passwordHash);

  if (!newUser) {
    return NextResponse.json(
      {
        errors: [
          {
            message: 'Registration failed',
          },
        ],
      },
      {
        status: 400,
      },
    );
  }

  // 6. Create a token -- each time the user logs in, a token is generated
  const token = crypto.randomBytes(100).toString('base64');
  // 7. Create the session record
  const session = await createSessionInsecure(newUser.id, token);

  if (!session) {
    return NextResponse.json(
      {
        errors: [
          {
            message: 'Problem creating session',
          },
        ],
      },
      {
        status: 400,
      },
    );
  }

  // 8. Send the new cookie in the headers
  (await cookies()).set({
    name: 'sessionToken',
    value: session.token,
    ...secureCookieOptions,
  });

  // 9. Return the new user information

  return NextResponse.json({ user: newUser });
}
