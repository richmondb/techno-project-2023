import {PrismaClient} from "@prisma/client"

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient({log: ['query', 'info', 'warn']});
} else {
    // @ts-ignore
    if (!global.prisma) {
        // @ts-ignore
        global.prisma = new PrismaClient({log: ['query', 'info', 'warn']});
    }
    // @ts-ignore
    prisma = global.prisma
}

export default prisma 