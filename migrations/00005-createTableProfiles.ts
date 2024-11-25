import type { Sql } from 'postgres';
import { z } from 'zod';

export type Profile = {
  profileId: number;
  userId: number;
  firstName: string;
  lastName: string;
  age: string;
  userRole: string;
};

export const profilesSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.string(),
  userRole: z.string(),
});

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE profiles (
      profile_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      user_id integer NOT NULL REFERENCES users (id) ON DELETE cascade,
      first_name varchar(80),
      last_name varchar(80),
      age varchar(5),
      user_role varchar(100)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE profiles`;
}
