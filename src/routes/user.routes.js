import { Router } from "express";
import { UserController } from "#controllers";

const userRouter = Router();

userRouter.route("/register").post(UserController.registerUser);

export default userRouter;
