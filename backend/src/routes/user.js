import express from "express";
const router = express.Router();
import { handleUserSignup } from "../controllers/user.js";
import { handleUserLogin } from "../controllers/user.js";

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);

export default router;
