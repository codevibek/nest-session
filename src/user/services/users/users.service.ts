import { Injectable } from "@nestjs/common";
import { IUser, SerializedUser } from "../../types";
import { plainToClass } from "class-transformer";
import { CreateUserDto } from "src/user/dto/CreateUser.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User as userEntity } from "src/typeorm";
import { Repository } from "typeorm";
import { encodePassword } from "src/utils/bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(userEntity)
    private readonly userRepository: Repository<userEntity>
  ) {}
  //   private users: IUser[] = [
  //     {
  //       username: "vibek",
  //       password: "why",
  //     },
  //     {
  //       username: "an",
  //       password: "why",
  //     },
  //   ];
  getAllUsers() {
    return this.userRepository.find({});
  }

  findUserById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  getUserById(username: string) {
    return this.userRepository.findOneBy({ username });
  }

  createuser(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }
}
