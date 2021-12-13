import {IUserRepository} from "../../repositories/IUserRepository"
import {ICreateUserRequestDTO} from "./ICreateUserRequestDTO";
import {User} from "../../entities/User";
import {IMailProvider} from "../../providers/IMailProvider";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private mailProvider: IMailProvider,
    ) {
    }

    async execute(user: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(user.email)
        if (userAlreadyExists) {
            throw new Error("User already exists.")
        }
        await this.userRepository.save(new User(user))
        await this.mailProvider.sendMail({
            to: {
                name: user.name,
                email: user.email,
            },
            from: {
                name: 'Equipe do App',
                email: 'equipeapp@mail.com',
            },
            subject: 'Seja bem vindo ao APP',
            body: '<p>Você já pode acessar a plataforma.</p>',
        })
    }
}
