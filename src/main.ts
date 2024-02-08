import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["log", "warn", "error"],
  });
  app.setGlobalPrefix("api");
  await app.listen(5000);
}
bootstrap();
