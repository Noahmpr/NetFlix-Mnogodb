import { PrismaClient } from '@prisma/client'

const globalForPrisma =globalThis as unknown as{
  prisma:PrismaClient|undefined
}

const prismaClientSingleton = () => {
  return new PrismaClient()
}

const prisma = globalForPrisma.prisma ?? new PrismaClient();
declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}
export const db =prisma


export default prisma

if (process.env.DATABASE_URL !== 'production') globalThis.prisma = prisma
