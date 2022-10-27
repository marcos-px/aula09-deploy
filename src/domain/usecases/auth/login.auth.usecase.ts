import { IClientsRepository } from "../../repositories/clients.repository.interface";
import { IUseCase } from "../usecase.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import jwt from 'jsonwebtoken';

export class LoginAuthUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository){

    }

    async execute(data: { user: string, pass: string }) {
        const client = await this._repository.readByWhere(data.user, data.pass);

        if(client){

            const token = jwt.sign(client, String(process.env.SECRET_KEY), {
                expiresIn: '2 days'
            });

            return {
                client: client,
                token: token
            };
        }

        return;
    }
}

export default new LoginAuthUseCase(
    ClientsRepository
);