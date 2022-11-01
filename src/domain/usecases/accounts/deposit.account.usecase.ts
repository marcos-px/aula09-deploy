import { AccountEntity } from "../../entities/accounts/account.entity";
import { IAccountsRepository } from "../../repositories/accounts.repository.interface";
import accountsRepository from "../../../adapters/repositories/accounts.repository";
import { IUseCase } from "../usecase.interface";
import { IDepositEntity } from "../../entities/transactions/deposit.entity";
import { TransactionStatus } from "../../entities/transactions/transactionstatus.entity";
import { TransactionType } from "../../entities/transactions/transactiontype.entity";
import { ITransactionsRepository } from "../../repositories/transactions.repository.interface";
import transactionsRepository from "../../../adapters/repositories/transactions.repository";

class DepositAccountUseCase implements IUseCase {

    constructor(
        private _repositoryAccounts: IAccountsRepository,
        private _repositoryTransactions: ITransactionsRepository
        ) {
    }

    async execute(data: { accountId: number, value: number }): Promise<AccountEntity | undefined> {
        if(data.value <= 0) {
            throw new Error("O valor deve ser maior que zero.");
        }
        const account = await accountsRepository.readById(data.accountId);
        if(!account){
            throw new Error("Conta não encontrada para depósito.");
        }

        const transaction: IDepositEntity = {
            date: new Date(),
            value: data.value,
            status: TransactionStatus.Completed,
            accountSourceId: account.indexId!,
            accountSource: account,
            type: TransactionType.Deposit,
            envelope: 123
        };
        this._repositoryTransactions.create(transaction);

        account.balance += data.value;
        return accountsRepository.updateById(account);
    }
}

export default new DepositAccountUseCase(
    accountsRepository,
    transactionsRepository
);