import { Router } from "express";
import { UserController } from "#controllers";
import { upload } from "#middlewares";

const userRouter = Router();

userRouter.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 },
    ]),
    UserController.registerUser
);

export default userRouter;
