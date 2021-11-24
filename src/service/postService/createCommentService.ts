import { prismaClient } from "../../prisma";

class CreateCommentService {
    async execute(comment: string, user_id: string, post_id: string){
        const post = await prismaClient.comment.create({
            data:{
                comment,
                post:{
                    connect:{
                        id: post_id
                    }
                },
                user:{
                    connect:{
                        id: user_id
                    }
                },
            },
            select:{
                user: {
                    select:{
                        name: true,
                        level: true
                    }
                },
                comment: true,
                created_at: true
            }
        })

        return post
    }
}

export { CreateCommentService }