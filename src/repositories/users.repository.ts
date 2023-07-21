import User from "../models/Users";
import { injectable } from "tsyringe";

@injectable()
class UsersRepository {
  async createUser(username: string, password: string) {
    const user = await User.create({ username, password });
    return user;
  }
}

export { UsersRepository };
