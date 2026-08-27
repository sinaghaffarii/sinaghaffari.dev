import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().int().positive().default(4000),
  MONGODB_URI: z.string().min(1),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.log("Invalid Environment Variables");
  console.log(result.error.format());

  process.exit(1);
}

export const env = result.data;
