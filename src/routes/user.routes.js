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
userRouter
    .route("/change-password")
    .post(verifyJWT, UserController.changeCurrentPassword);
userRouter.route("/current-user").get(verifyJWT, UserController.getCurrentUser);
userRouter
    .route("/update-account")
    .patch(verifyJWT, UserController.updateAccountDetails);
userRouter
    .route("/avatar")
    .patch(verifyJWT, upload.single("avatar"), UserController.updateUserAvatar);
userRouter
    .route("/cover-image")
    .patch(
        verifyJWT,
        upload.single("coverImage"),
        UserController.updateUserCoverImage
    );
userRouter
    .route("/c/:username")
    .get(verifyJWT, UserController.getUserChannelProfile);
userRouter.route("/history").get(verifyJWT, UserController.getWatchHistory);

export default userRouter;
