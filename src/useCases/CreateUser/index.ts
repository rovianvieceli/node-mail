import {MailtrapMailProvider} from "../../providers/Implementations/MailtrapMailProvider";
import {PostgresUsersRepository} from "../../repositories/Implementations/PostgresUsersRepository";
import {CreateUserUseCase} from "./CreateUserUseCase";
import {CreateUserController} from "./CreateUserController";

const mailtrapProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export {createUserUseCase, createUserController}
