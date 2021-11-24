import { prismaClient } from "../../prisma";

class SigninUserService{
    async execute(name: string, email: string, password: string, level: string){
        const user = await prismaClient.user.create({
            data:{
                name,
                email,
                password,
                level
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

export { SigninUserService }