import { UsersRepository } from "../repositories/users.repository";
import { injectable } from "tsyringe";

@injectable()
class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async register(username: string, password: string) {
    const user = await this.usersRepository.createUser(username, password);
    return user;
  }
}

export { UsersService };
