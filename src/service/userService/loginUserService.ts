import { prismaClient } from "../../prisma";

class LoginUserService{
    async execute(email: string){
        const user = await prismaClient.user.findUnique({
            where:{
                email,
                
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

export { LoginUserService }