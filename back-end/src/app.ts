import express, { type Express } from "express";
import cors from "cors";
import helmet from "helmet";

import postRoutes from "./routes/post.routes.js";

import { notFoundMiddleware } from "./middlewares/not-found.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

export const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Root
 */
app.get("/", (_req, res) => {
  res.json({
    message: "Blog API is running",
  });
});

/**
 * Health check
 */
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

/**
 * API routes
 */
app.use("/api/posts", postRoutes);

/**
 * 404
 */
app.use(notFoundMiddleware);

/**
 * Error handler
 */
app.use(errorMiddleware);
