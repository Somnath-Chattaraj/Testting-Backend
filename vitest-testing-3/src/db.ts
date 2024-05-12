import { PrismaClient } from '@prisma/client/edge'
import { vi } from 'vitest'
export const prismaClient = new PrismaClient()

// const prismaClient2 = {
//     sum: {
//         create: () => {

//         }
//     }
// }

// vi.mock('../db', () => ({
//     prismaClient: {
//         user: {
//             create: vi.fn()
//         }
//     }
// }))