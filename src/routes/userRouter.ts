import { Router } from "express";
import { GetUserController } from "../controller/userController/getUserController";
import { LoginUserController } from "../controller/userController/loginUserController";
import { SigninUserController } from "../controller/userController/signinUserController";

export const userRouter:Router = Router()

userRouter.post('/signin', new SigninUserController().handle )
userRouter.post('/login', new LoginUserController().handle)
userRouter.get('/getuser', new GetUserController().handle)
