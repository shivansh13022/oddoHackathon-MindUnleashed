import express from "express";
import { getBlog } from "../controllers/blog.js";
const router = express.Router();
router.get("/", getBlog);

export default router;
