import { Request, Response } from "express";
import { LikeDislikeService } from "../../service/postService/likeDislikeService";

class LikeDislikeController {
    async handle(req: Request, res: Response){
        const { isLike, post_id, user_id } = req.query

        const service = new LikeDislikeService()

        try {
            const result = await service.execute(String(isLike),String(post_id), String(user_id))

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'Error'})
        }
    }
}

export { LikeDislikeController }