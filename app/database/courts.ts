import type { Session } from 'migrations/00001-sessions';
import { cache } from 'react';
import { sql } from './connect';

export type Court = {
  courtId: number;
  courtName: string;
  courtImg: string;
  courtDescription: string | null;
  ownerName: string;
  ownerInitials: string;
  ownerNumber: string;
  workingHours: string;
  weekendHours: string;
  pricePerHour: number;
  sportCategory: string;
};

export const getFootballCourtsInsecure = cache(async () => {
  const courts = await sql<Court[]>`
    SELECT
    *
    FROM
      courts
    WHERE sport_category = 'football';
  `;
  return courts;
});

export const getBasketballCourtsInsecure = cache(async () => {
  const courts = await sql<Court[]>`
    SELECT
    *
    FROM
      courts
    WHERE sport_category = 'basketball';
  `;
  return courts;
});

export const getVolleyballCourtsInsecure = cache(async () => {
  const courts = await sql<Court[]>`
    SELECT
    *
    FROM
      courts
    WHERE sport_category = 'volleyball';
  `;
  return courts;
});

export const getTennisCourtsInsecure = cache(async () => {
  const courts = await sql<Court[]>`
    SELECT
    *
    FROM
      courts
    WHERE sport_category = 'tennis';
  `;
  return courts;
});

export const getSquashCourtsInsecure = cache(async () => {
  const courts = await sql<Court[]>`
    SELECT
    *
    FROM
      courts
    WHERE sport_category = 'squash';
  `;
  return courts;
});

export const getGolfCourtsInsecure = cache(async () => {
  const courts = await sql<Court[]>`
    SELECT
    *
    FROM
      courts
    WHERE sport_category = 'golf';
  `;
  return courts;
});

export const getBoxingCourtsInsecure = cache(async () => {
  const courts = await sql<Court[]>`
    SELECT
    *
    FROM
      courts
    WHERE sport_category = 'boxing';
  `;
  return courts;
});

export const getYogaCourtsInsecure = cache(async () => {
  const courts = await sql<Court[]>`
    SELECT
    *
    FROM
      courts
    WHERE sport_category = 'yoga';
  `;
  return courts;
});

export const getPilatesCourtsInsecure = cache(async () => {
  const courts = await sql<Court[]>`
    SELECT
    *
    FROM
      courts
    WHERE sport_category = 'pilates';
  `;
  return courts;
});

export const getSingleCourtInsecure = cache(async (id: number) => {
  const [court] = await sql`
    SELECT
    *
    FROM
      courts
    WHERE court_id = ${id}
  `;
  return court;
});
