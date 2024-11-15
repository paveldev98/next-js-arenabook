import crypto from 'node:crypto';
import { createSessionInsecure } from '@/app/database/sessions';
import { getUserWithPasswordHashInsecure } from '@/app/database/users';
import bcrypt from 'bcrypt';
import { type User, userSchema } from 'migrations/00000-createTableUsers';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { secureCookieOptions } from 'util/cookies';

export type LoginResponseBody =
  | {
      user: { username: User['username'] };
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: Request,
): Promise<NextResponse<LoginResponseBody>> {
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

  // 3. Verify the user credentials
  const userWithPasswordHash = await getUserWithPasswordHashInsecure(
    result.data.username,
  );

  if (!userWithPasswordHash) {
    return NextResponse.json(
      {
        errors: [
          {
            message: 'Username or Password is invalid',
          },
        ],
      },
      {
        status: 400,
      },
    );
  }

  // 4. Hash the plain password from the user
  const isPasswordValid = await bcrypt.compare(
    result.data.password,
    userWithPasswordHash.passwordHash,
  );

  if (!isPasswordValid) {
    return NextResponse.json(
      {
        errors: [
          {
            message: 'Username or Password is invalid',
          },
        ],
      },
      {
        status: 400,
      },
    );
  }

  // At this stage we already confirm that the user is who they say they are
  // 5. Create a token -- each time the user logs in, a token is generated
  const token = crypto.randomBytes(100).toString('base64');
  // 6. Create the session record
  const session = await createSessionInsecure(userWithPasswordHash.id, token);

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

  // 7. Send the new cookie in the headers
  (await cookies()).set({
    name: 'sessionToken',
    value: session.token,
    ...secureCookieOptions,
  });

  // 8. Return the new user information without the password hash

  return NextResponse.json({
    user: {
      username: userWithPasswordHash.username,
    },
  });
}
