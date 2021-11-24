import { prismaClient } from "../../prisma";

class GetUserService{
    async execute(id: string){
        const user = await prismaClient.user.findUnique({
            where:{
                id
            },
            select:{
                name: true,
                email: true,
                level: true
            }
        })

        return user
    }
}

export { GetUserService }