import { Request, Response } from "express";
import { GetUserService } from "../../service/userService/getUserSerice";

class GetUserController {
    async handle(req: Request, res: Response){
        const { id } = req.query

        const service = new GetUserService()
    
        try {
            const result = await service.execute(String(id))

            console.log(result)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'User not found'})
        }
    }
}

export { GetUserController }