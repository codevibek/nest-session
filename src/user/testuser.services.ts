import { Injectable } from "@nestjs/common";
import { IUser, SerializedUser } from "./types";
import { plainToClass } from "class-transformer";

@Injectable()
export class UserService {
  private users: IUser[] = [
    {
      username: "vibek",
      password: "why",
    },
    {
      username: "an",
      password: "why",
    },
  ];
  getAllUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }
  getUserById(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
