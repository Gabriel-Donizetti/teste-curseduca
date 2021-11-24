import { Request, Response } from "express";
import { GetAllPostService } from "../../service/postService/getAllPostsService";

class GetAllPostController {
    async handle(req: Request, res: Response){

        const service = new GetAllPostService()

        try {
            const result = await service.execute()

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'Posts not found'})
        }
    }
}

export { GetAllPostController }