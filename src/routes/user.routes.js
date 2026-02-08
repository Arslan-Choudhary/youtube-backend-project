import { Router } from "express";
import { UserController } from "#controllers";
import { upload, verifyJWT } from "#middlewares";

const userRouter = Router();

userRouter.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 },
    ]),
    UserController.registerUser
);

userRouter.route("/login").post(UserController.loginUser);

// secure routes
userRouter.route("/logout").post(verifyJWT, UserController.logoutUser);
userRouter.route("/refresh-token").post(UserController.refreshAccessToken);

export default userRouter;
