import { Router } from "express";
import { CreateCommentController } from "../controller/postController/createCommentController";
import { CreatePostController } from "../controller/postController/createPostController";
import { GetAllPostController } from "../controller/postController/getAllPostsController";
import { LikeDislikeController } from "../controller/postController/likeDislikeController";
import { UpdateLikeController } from "../controller/postController/updateLikeController";

export const postsRouter:Router = Router()


//POSTS
postsRouter.post('/createpost', new CreatePostController().handle)
postsRouter.get('/getall', new GetAllPostController().handle)

//COMMENTS
postsRouter.post('/createcomment', new CreateCommentController().handle)

//LIKE AND DISLIKE
postsRouter.post('/likedislike', new LikeDislikeController().handle)
postsRouter.put('/updlike', new UpdateLikeController().handle)