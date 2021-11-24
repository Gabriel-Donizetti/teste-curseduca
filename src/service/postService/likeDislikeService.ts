import { prismaClient } from "../../prisma";

class LikeDislikeService {
    async execute(isLike: string, post_id: string, user_id: string){
        if(isLike == 'true')
            var Like = true

        const like = await prismaClient.likeDislike.create({
            data:{
                isLike: Like,
                post:{
                    connect:{
                        id: post_id
                    }
                },
                user:{
                    connect:{
                        id: user_id
                    }
                }
            },
            select:{
                user:{
                    select:{
                        name:true
                    }
                },
                isLike:true,
                post: true
            }
        })

        return like
    }
}

export { LikeDislikeService }