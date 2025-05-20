// C:\Users\krish\Desktop\mVision\Malted-Vision\lib\prisma.ts
import { PrismaClient } from '@prisma/client';

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DATABASE_URL:', process.env.DATABASE_URL ? '[REDACTED]' : 'undefined');

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let prisma: PrismaClient;

try {
  if (!globalForPrisma.prisma) {
    console.log('Creating new PrismaClient');
    globalForPrisma.prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'], // Enable detailed logging
    });
  }
  prisma = globalForPrisma.prisma;
  console.log('Prisma Client assigned:', prisma);

  // Test connection
  await prisma.$connect();
  console.log('Prisma Client connected to database');
} catch (error) {
  console.error('Prisma Client initialization error:', error);
  throw error;
}

export { prisma };