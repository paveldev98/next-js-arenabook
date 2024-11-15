import type { User } from 'migrations/00000-createTableUsers';
import type { Session } from 'migrations/00001-sessions';
import { cache } from 'react';
import { sql } from './connect';

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const getUser = cache(async (sessionToken: Session['token']) => {
  const [user] = await sql<User[]>`
    SELECT
      users.id,
      users.username
    FROM
      users
    INNER JOIN sessions ON (
      sessions.user_id = users.id
    )
    WHERE
      sessions.token = ${sessionToken}
      AND sessions.expiry_timestamp > now();

  `;

  return user;
});

export const getUserInsecure = cache(async (username: User['username']) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      username
    FROM
      users
      WHERE username = ${username}
  `;

  return user;
});

export const createUserInsecure = cache(
  async (
    username: User['username'],
    passwordHash: UserWithPasswordHash['passwordHash'],
  ) => {
    const [user] = await sql<User[]>`
      INSERT INTO
        users (
          username,
          password_hash
        )
        VALUES
        (
           ${username},
           ${passwordHash}
        )
        RETURNING
          users.id,
          users.username
    `;

    return user;
  },
);

export const getUserWithPasswordHashInsecure = cache(
  async (username: User['username']) => {
    const [user] = await sql<UserWithPasswordHash[]>`
    SELECT
      *
    FROM
      users
      WHERE username = ${username}
  `;

    return user;
  },
);
