import { type InferSchemaType, model, Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
      maxlength: 200,
    },
    content: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
      trim: true,
      maxlength: 100,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export type Post = InferSchemaType<typeof postSchema>;
export const PostModel = model<Post>("Post", postSchema);
