import { app } from "./app.js";
import { env } from "./config/env.js";
import { connectDatabase } from "./db/mongoose.js";

async function bootstrap() {
  await connectDatabase();

  app.listen(env.PORT, () => {
    console.log(`
      Server running on http://localhost:${env.PORT}`);
  });
}

bootstrap().catch((error) => {
  console.error("Faild to start server: ", error);
  process.exit(1);
});
