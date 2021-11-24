import { Request, Response } from "express";
import { CreateCommentService } from "../../service/postService/createCommentService";

class CreateCommentController {
    async handle(req: Request, res: Response){
        const { comment } = req.body
        const { user_id, post_id } = req.query

        const service = new CreateCommentService()

        try {
            const result = await service.execute(comment, String(user_id), String(post_id))

            console.log(result)

            return res.json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

export { CreateCommentController }