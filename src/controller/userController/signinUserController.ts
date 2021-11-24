import { Request, Response } from "express";
import { SigninUserService } from "../../service/userService/signinUserService";

class SigninUserController {
    async handle(req: Request, res: Response){
        const { name, email, password } = req.body
        var level = 'user'

        const service = new SigninUserService()

        var result = email.substring(email.indexOf("@") + 1)
        if(result == 'curseduca.com')
            level = 'instructor'

        try {
            const result = await service.execute(name, email, password, level)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'User already exist'})
        }
    }
}

export { SigninUserController }