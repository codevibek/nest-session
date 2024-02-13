import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UserService } from "src/user/services/users/users.service";
import { CreateUserDto } from "src/user/dto/CreateUser.dto";
import { AuthenticatedGuard } from "../../../auth/utils/LocalGuard";
@Controller("user")
export class UserController {
  constructor(
    @Inject("USER_SERVICE") private readonly userService: UserService
  ) {}

  @UseGuards(AuthenticatedGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get("")
  getallUsers() {
    return this.userService.getAllUsers();
  }
  //   @UseInterceptors(ClassSerializerInterceptor)
  // @Get("/:username")
  // getByUsername(@Param("username") username: string) {
  //   const user = this.userService.getUserById(username);
  //   if (user) return new SerializedUser(user);
  //   else throw new HttpException("user not Found", HttpStatus.BAD_REQUEST);
  // }

  @Post("create")
  @UsePipes(ValidationPipe)
  createuser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createuser(createUserDto);
  }
}
