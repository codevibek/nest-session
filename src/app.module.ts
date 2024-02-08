import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { CustomersModule } from "./customers/customers.module";

@Module({
  imports: [UserModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
