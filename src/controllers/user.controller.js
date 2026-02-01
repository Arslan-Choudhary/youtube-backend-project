import { asyncHanlder } from "#utils";

class UserController {
    static registerUser = asyncHanlder(async (req, res) => {
        res.status(200).json({
            message: "ok",
        });
    });
}

export default UserController;
