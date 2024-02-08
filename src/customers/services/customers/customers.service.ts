import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "src/customers/dtos/CreateCustomer.dto";
import { Customer } from "src/types/Customer";

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: "vibek@gmail.com",
      name: "vibek",
    },
    {
      id: 2,
      email: "vibek@gmail.com",
      name: "vibek1",
    },
    {
      id: 3,
      email: "vibek@gmail.com",
      name: "vibek2",
    },
  ];
  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }
  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
  findAllCustomers() {
    return this.customers;
  }
}
