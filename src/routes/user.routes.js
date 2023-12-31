import { Router } from "express";
import { userRegister, loginUser, logoutUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();


router.route("/register").post( upload.fields([
    {
        name: "avatar",
        maxCount: 1
    }, 
    {
        name: "coverImage",
        maxCount: 1
    }
]),userRegister) //  user register route


router.route("/login").post(loginUser)

// secure routes
router.route("/logout").post(verifyJWT, logoutUser )


export default router;