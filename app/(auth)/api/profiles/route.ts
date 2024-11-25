import { createProfile } from '@/app/database/profiles';
import {
  type Profile,
  profilesSchema,
} from 'migrations/00005-createTableProfiles';
import { NextRequest, NextResponse } from 'next/server';
import { getCookie } from 'util/cookies';

export type CreateProfileResponseBodyPost =
  | {
      profile: { firstName: Profile['firstName'] };
    }
  | {
      error: string;
    };

export async function POST(
  request: Request,
): Promise<NextResponse<CreateProfileResponseBodyPost>> {
  // 1. Get the profile data from the request.
  const body = await request.json();
  // 2. Validate profiles data with zod.
  const result = profilesSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Request does not contain profile object' },
      {
        status: 400,
      },
    );
  }
  // 3. Get the token from the cookie.
  const sessionTokenCookie = await getCookie('sessionToken');
  // 4. Create the profile
  const newProfile =
    sessionTokenCookie &&
    (await createProfile(
      sessionTokenCookie,
      result.data.firstName,
      result.data.lastName,
      result.data.age,
      result.data.userRole,
    ));

  console.log('Profile ', newProfile);

  // 5. If the profile creation fails, return an error.
  if (!newProfile) {
    return NextResponse.json(
      { error: 'Profile not created or access denied creating profile' },
      {
        status: 400,
      },
    );
  }

  // 6. Return the text content of the profile.

  return NextResponse.json({
    profile: { firstName: newProfile.firstName },
  });
}
