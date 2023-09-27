import { PrismaClient } from '@prisma/client'

// Re-using a single PrismaClient instance
// https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#prismaclient-in-long-running-applications
let prisma = new PrismaClient()

export default prisma
