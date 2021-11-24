import { Request, Response } from "express";
import { UpdateLikeService } from "../../service/postService/UpdateLikeService";

class UpdateLikeController {
    async handle(req: Request, res: Response){
        const { isLike, id } = req.query

        const service = new UpdateLikeService()

        try {
            const result = await service.execute(String(isLike), String(id))

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'Error'})
        }
    }
}

export { UpdateLikeController }