import express from "express";
import { getResponse } from "../controllers/chat.js";

const router = express.Router();

router.post("/", getResponse);

export default router;
