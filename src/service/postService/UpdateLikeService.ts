import { prismaClient } from "../../prisma";

class UpdateLikeService {
    async execute(isLike: string, id: string){
        if(isLike == 'true')
            var Like = true
        else
            var Like = false

        const like = await prismaClient.likeDislike.update({
           where:{
               id
           },
           data:{
               isLike: Like
           },
           select:{
               isLike: true,
               post: true,
               user:{
                   select:{
                       name: true,
                       level: true
                   }
               }
           }
        })

        return like
    }
}

export { UpdateLikeService }