import { Router, type Router as RouterType } from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";

const router: RouterType = Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
