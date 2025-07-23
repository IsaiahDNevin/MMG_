// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

declare global {
  // Allow global `var` so we don’t break TS on re‑loads
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const prismaClient = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prismaClient
}

export default prismaClient
