import { prismaClient } from "../../prisma";

class GetAllPostService {
    async execute(){
        const post = await prismaClient.posts.findMany({
           take: 1000,
           select:{
               user: {
                   select:{
                       name: true,
                       level: true
                   }
               },
               post: true,
               created_at:true,
               post_comments:{
                   select:{
                    user: {
                        select:{
                            name: true,
                            level: true
                        }
                    },
                    comment:true,
                    created_at: true
                   }
               }
           }
        })

        return post
    }
}

export { GetAllPostService }