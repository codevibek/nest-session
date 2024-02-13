import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { CustomersController } from "./controllers/customers/customers.controller";
import { CustomersService } from "./services/customers/customers.service";
import { ValidateCustomerMiddleware } from "./middlewares/validateExpiredCustomer.middleware";

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCustomerMiddleware).forRoutes({
      path: "customers/search/:id",
      method: RequestMethod.GET,
    });
    // consumer.apply(ValidateCustomerMiddleware).forRoutes({
    // path: "customers/search/:id",
    // method: RequestMethod.GET,
    // });
  }
}
