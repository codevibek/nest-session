import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Request, Response } from "express";
import { CreateCustomerDto } from "src/customers/dtos/CreateCustomer.dto";
import { CustomersService } from "src/customers/services/customers/customers.service";
import { HttpExceptionFilter } from "src/user/filters/HttpExceptionFilters";

@Controller("customers")
export class CustomersController {
  constructor(private customerServices: CustomersService) {}
  //   @Get(":id")
  //   getCustomer(
  //     @Param("id", ParseIntPipe) id: number,
  //     @Req() req: Request,
  //     @Res() res: Response,
  //   ) {
  //     const customer = this.customerServices.findCustomerById(id);
  //     if (customer) {
  //       res.send(customer).status(200);
  //     } else {
  //       res.status(400).send({ msg: "Customer not found" });
  //     }
  //   }

  @Get("/search/:id")
  @UseFilters(HttpExceptionFilter)
  searchCustomer(@Param("id", ParseIntPipe) id: number) {
    const customer = this.customerServices.findCustomerById(id);
    if (customer) return customer;
    throw new NotFoundException();
  }

  @Post("create")
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customerServices.createCustomer(createCustomerDto);
  }

  @Get("/all")
  getAllCustomers() {
    const customer = this.customerServices.findAllCustomers();
    if (customer) return customer;
    throw new HttpException("Customer not Found", HttpStatus.BAD_REQUEST);
  }
}
