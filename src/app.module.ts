import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { CustomersModule } from "./customers/customers.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import entities from "./typeorm";

@Module({
  imports: [
    UserModule,
    CustomersModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "password",
      database: "nest",
      entities: entities,
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
