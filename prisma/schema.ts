// prisma/schema.ts

import { PrismaClient } from '@prisma/client';

const globalForPrisma =globalThis as unknown as{
  prisma:PrismaClient|undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export const db =prisma

export type User = {
  id: number;
  email: string;
  // Add other user fields as needed
};

export type WatchList = {
  id: number;
  userId: string;
  movieId: number;
  // Add other watchlist fields as needed
};

export { prisma };