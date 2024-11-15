import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE courts (
      court_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      court_name varchar(180) NOT NULL,
      court_img varchar(100) NOT NULL,
      court_description text,
      owner_name varchar(80) NOT NULL,
      owner_initials varchar(5) NOT NULL,
      owner_number varchar(20) NOT NULL,
      working_hours varchar(15) NOT NULL,
      weekend_hours varchar(15) NOT NULL,
      price_per_hour decimal(10, 2) NOT NULL,
      sport_category varchar(15) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE courts `;
}
