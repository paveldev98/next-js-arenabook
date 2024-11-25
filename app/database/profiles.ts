import type { Session } from 'migrations/00001-sessions';
import type { Profile } from 'migrations/00005-createTableProfiles.ts';
import { cache } from 'react';
import { sql } from './connect';

export const createProfile = cache(
  async (
    sessionToken: Session['token'],
    firstName: string,
    lastName: string,
    age: string,
    userRole: string,
  ) => {
    const [profile] = await sql<Profile[]>`
      INSERT INTO
        profiles (user_id, first_name, last_name, age, user_role) (
          SELECT
            sessions.user_id,
            ${firstName},
            ${lastName},
            ${age},
            ${userRole}
          FROM
            sessions
          WHERE
            token = ${sessionToken}
            AND sessions.expiry_timestamp > now()
        )
      RETURNING
        profiles.*
    `;

    return profile;
  },
);
