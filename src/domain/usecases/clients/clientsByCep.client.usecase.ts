import { IClientsRepository } from "../../repositories/clients.repository.interface";
import { IUseCase } from "../usecase.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";

export class ClientsByCepUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository){

    }

    async execute(cep: string) {
        return await this._repository.groupUsersByCep(cep);
    }
}

export default new ClientsByCepUseCase(
    ClientsRepository
);