import { Request, Response } from "express";
import { CreatePostService } from "../../service/postService/createPostService";

class CreatePostController {
    async handle(req: Request, res: Response){
        const { title, post } = req.body
        const { id } = req.query

        const service = new CreatePostService()

        try {
            const result = await service.execute(title, post, String(id))

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'Error'})
        }
    }
}

export { CreatePostController }