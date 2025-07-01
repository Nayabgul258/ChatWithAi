import express from "express"
import { loginUser, myProfile, verifyUser } from "../controllar/userControlar.js"
import { isAuth } from "../middelwares/auth.js";




const router = express.Router()

router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth ,myProfile);

export default router;