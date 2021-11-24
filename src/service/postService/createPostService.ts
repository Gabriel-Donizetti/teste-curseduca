import { prismaClient } from "../../prisma";

class CreatePostService {
    async execute(title: string, posts: string, id: string){
        const post = await prismaClient.posts.create({
            data:{
                title,
                post: posts,
                user:{
                    connect:{
                        id
                    }
                }
            },
            select:{
                user: {
                    select:{
                        name: true,
                        level: true
                    }
                },
                title: true,
                post: true,
                created_at: true
            }
        })

        return post
    }
}

export { CreatePostService }