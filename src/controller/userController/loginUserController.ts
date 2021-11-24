import { Request, Response } from "express";
import { LoginUserService } from "../../service/userService/loginUserService";

class LoginUserController {
    async handle(req: Request, res: Response){
        const { email } = req.body

        const service = new LoginUserService()
    
        try {
            const result = await service.execute(email)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'User not found'})
        }
    }
}

export { LoginUserController }