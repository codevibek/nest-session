import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from "@nestjs/common";
import { UserService } from "./user.services";
import { SerializedUser } from "./types";

@Controller("user")
export class UserController {
  constructor(
    @Inject("USER_SERVICE") private readonly userService: UserService,
  ) {}

  @Get("")
  getallUsers() {
    return this.userService.getAllUsers();
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:username")
  getByUsername(@Param("username") username: string) {
    const user = this.userService.getUserById(username);
    if (user) return new SerializedUser(user);
    else throw new HttpException("user not Found", HttpStatus.BAD_REQUEST);
  }
}
