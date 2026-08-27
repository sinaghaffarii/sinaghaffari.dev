import type { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export const errorMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
  console.log(error);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "Internal Server Error",
  });
};
