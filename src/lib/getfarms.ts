import prisma from "@/prisma/client";

export async function Getfarms() {
    // console.log(data)
    return prisma.farm.findMany({
        include: {
            farmowner: true,
            globalfarmstatus: true,
        }
    });
}

export async function Getspecific(id: number) {
    // console.log(data)
    return prisma.farm.findUnique({
        where: {
            id: id
        },
        include: {
            farmowner: true,
            globalfarmstatus: true,
        }
    })
}
