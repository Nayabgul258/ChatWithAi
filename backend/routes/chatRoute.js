import express from "express";
import { isAuth } from "../middelwares/auth.js";
import { addConversation, createChat, deleteChat, getAllChat, getConversation } from "../controllar/chatControlar.js";

const router = express.Router();

router.post("/new", isAuth, createChat);
router.get("/all", isAuth, getAllChat);
router.post("/:id", isAuth, addConversation);
router.get("/:id", isAuth, getConversation);
router.delete("/:id", isAuth, deleteChat);




export default router;