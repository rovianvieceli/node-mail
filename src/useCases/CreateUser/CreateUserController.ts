import {Request, Response} from "express"
import {CreateUserUseCase} from "./CreateUserUseCase"

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {
    }

    async handler(request: Request, response: Response): Promise<Response> {
        const user = request.body

        try {
            await this.createUserUseCase.execute(user)
            return  response.status(201).send()
        } catch (erro) {
            return response.status(404).json({
                message: erro.message || 'Unexpectec error.'
            })
        }
    }
}
