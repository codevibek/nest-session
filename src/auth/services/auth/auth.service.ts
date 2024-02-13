import { Inject, Injectable } from "@nestjs/common";
import { UserService } from "src/user/services/users/users.service";
import { comparePasswords } from "src/utils/bcrypt";

@Injectable()
export class AuthService {
  constructor(
    @Inject("USER_SERVICE") private readonly userService: UserService
  ) {}
  async validateUser(username: string, password: string) {
    const userDB = await this.userService.getUserById(username);
    if (userDB) {
      const matched = comparePasswords(password, userDB.password);
      if (matched) {
        return userDB;
      } else {
        return null;
      }
    }
    return null;
  }
}
