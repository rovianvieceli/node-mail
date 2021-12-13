import {IUserRepository} from "../IUserRepository";
import {User} from "../../entities/User";

export class PostgresUsersRepository implements IUserRepository {
    constructor(
        private users: User[] = []
    ) {
    }

    async findByEmail(email: string): Promise<User> {
        return this.users.find(user => user.email === email)
    }

    async save(user: User): Promise<void> {
        this.users.push(user)
    }
}
