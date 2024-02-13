import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth/auth.controller";
import { AuthService } from "./services/auth/auth.service";
import { UserService } from "src/user/services/users/users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./utils/LocalStrategy";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ session: true }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: "AUTH_SERVICE",
      useClass: AuthService,
    },
    { provide: "USER_SERVICE", useClass: UserService },
    LocalStrategy,
  ],
})
export class AuthModule {}
