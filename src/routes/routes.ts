import { Router } from "express";
import { postsRouter } from "./postsRouter";
import { userRouter } from "./userRouter";

export const router: Router = Router()

router.use('/user', userRouter)
router.use('/posts', postsRouter)