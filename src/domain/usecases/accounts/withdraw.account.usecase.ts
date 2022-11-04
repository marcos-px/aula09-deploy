import { AccountEntity } from "../../entities/accounts/account.entity";
import { IAccountsRepository } from "../../repositories/accounts.repository.interface";
import accountsRepository from "../../../adapters/repositories/accounts.repository";
import { IUseCase } from "../usecase.interface";
import { IWithdrawEntity } from "../../entities/transactions/withdraw.entity";
import { TransactionStatus } from "../../entities/transactions/transactionstatus.entity";
import { TransactionType } from "../../entities/transactions/transactiontype.entity";
import { ITransactionsRepository } from "../../repositories/transactions.repository.interface";
import transactionsRepository from "../../../adapters/repositories/transactions.repository";

class WithdrawAccountUseCase implements IUseCase {

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
        
        if(!account) {
            throw new Error("Conta não encontrada para saque.");
        } else if (account.balance < data.value) {
            throw new Error("Você não tem saldo suficiente para esse saque.");
        }

        account.balance -= data.value;
        
        /**
         * Aqui teria algum comando para envio do dinheiro para o cliente em um ambiente real.
         */

        //  const transaction: IWithdrawEntity = {
        //     date: new Date(),
        //     value: data.value,
        //     status: TransactionStatus.Completed,
        //     accountSourceId: account.indexId!,
        //     accountSource: account,
        //     type: TransactionType.Withdraw
        // };
        // this._repositoryTransactions.create(transaction);

        return accountsRepository.updateById(account);
    }
}

export default new WithdrawAccountUseCase(
    accountsRepository,
    transactionsRepository
);