import { IUseCase } from "../usecase.interface";
import { ITransactionsRepository } from "../../repositories/transactions.repository.interface";
import { ITransactionEntity } from "../../entities/transactions/transaction.entity";
import transactionsRepository from "../../../adapters/repositories/transactions.repository";

class ListTransactionsUseCase implements IUseCase {

    constructor(private _repository: ITransactionsRepository) {

    }

    async execute(accountId: string): Promise<ITransactionEntity[] | undefined> {
        return await this._repository.list(accountId);
    }
}

export default new ListTransactionsUseCase(
    transactionsRepository
);