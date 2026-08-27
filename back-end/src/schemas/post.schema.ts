import { z } from "zod";

export const createPostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required.")
    .max(200, "Title must be less than 200 characters."),

  content: z.string().min(1, "Content is required."),

  author: z
    .string()
    .trim()
    .min(1, "Author is required.")
    .max(100, "Author must be less than 100 characters."),

  published: z.boolean().optional(),
});

export const updatePostSchema = createPostSchema.partial();

export type CreatePostInput = z.infer<typeof createPostSchema>;

export type UpdatePostInput = z.infer<typeof updatePostSchema>;

export const postSchema = z.object({
  _id: z.string(),

  title: z.string(),

  content: z.string(),

  author: z.string(),

  published: z.boolean(),

  createdAt: z.string().datetime(),

  updatedAt: z.string().datetime(),
});
