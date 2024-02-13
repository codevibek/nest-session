import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as session from "express-session";
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["log", "warn", "error"],
  });
  app.enableCors();
  app.setGlobalPrefix("api");
  app.use(
    session({
      name: "nest_id",
      secret: "apple",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 18600000,
      },
    })
  );
  app.use(passport.initialize);
  app.use(passport.session());
  await app.listen(5000);
}
bootstrap();
