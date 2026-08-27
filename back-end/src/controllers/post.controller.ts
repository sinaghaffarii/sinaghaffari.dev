import type { NextFunction, Request, Response } from "express";
import { PostModel } from "../models/post.model.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import { createPostSchema, updatePostSchema } from "../schemas/post.schema.js";

export async function getPosts(_req: Request, res: Response, next: NextFunction) {
  try {
    const posts = await PostModel.find().sort({ createdAt: -1 }).lean();

    res.status(StatusCodes.OK).json({
      data: posts,
    });
  } catch (error) {
    next(error);
  }
}

export async function getPostById(_req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = _req.params;

    if (!mongoose.isValidObjectId(id)) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Invalid post ID",
      });
      return;
    }

    const post = await PostModel.findById(id).lean();

    if (!post) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: "Post not found.",
      });
    }

    res.status(StatusCodes.OK).json({
      data: post,
    });
  } catch (error) {
    next(error);
  }
}

export async function createPost(_req: Request, res: Response, next: NextFunction) {
  try {
    const result = createPostSchema.safeParse(_req.body);

    if (!result.success) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Validation Faild",
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

    const post = await PostModel.create(result.data);
    res.status(StatusCodes.CREATED).json({
      data: post,
    });
  } catch (error) {
    next(error);
  }
}

export async function updatePost(_req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = _req.params;
    if (!mongoose.isValidObjectId(id)) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Invalidate Post ID",
      });
      return;
    }

    const result = updatePostSchema.safeParse(_req.body);
    if (!result.success) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Validation Faild",
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

    const post = await PostModel.findByIdAndUpdate(id, result.data, {
      new: true,
      runValidators: true,
    }).lean();

    if (!post) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: "Post not found",
      });
      return;
    }

    res.status(StatusCodes.OK).json({
      data: post,
    });
  } catch (error) {
    next(error);
  }
}

export async function deletePost(_req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = _req.params;
    if (!mongoose.isValidObjectId(id)) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Invalid Post ID",
      });
      return;
    }

    const post = await PostModel.findByIdAndDelete(id);
    if (!post) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: "Post not found",
      });
      return;
    }
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    next(error);
  }
}
