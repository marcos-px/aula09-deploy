import { AccountEntity } from "../../entities/accounts/account.entity";
import { IAccountsRepository } from "../../repositories/accounts.repository.interface";
import accountsRepository from "../../../adapters/repositories/accounts.repository";
import { IUseCase } from "../usecase.interface";
import withdrawAccountUseCase from "./withdraw.account.usecase";
import depositAccountUseCase from "./deposit.account.usecase";
import transactionsRepository from "../../../adapters/repositories/transactions.repository";
import { ITransactionsRepository } from "../../repositories/transactions.repository.interface";
import { ITransferEntity } from "../../entities/transactions/transfer.entity";
import { TransactionStatus } from "../../entities/transactions/transactionstatus.entity";
import { TransactionType } from "../../entities/transactions/transactiontype.entity";

class TransferAccountUseCase implements IUseCase {

    constructor(
        private _repositoryAccounts: IAccountsRepository,
        private _repositoryTransactions: ITransactionsRepository
        ) {
    }

    async execute(data: { sourceAccountId: number, value: number, targetAccountId: number }): Promise<AccountEntity | undefined> {
        let sourceAccount: AccountEntity | undefined;
        let targetAccount: AccountEntity | undefined;
        try{
            targetAccount = await accountsRepository.readById(data.targetAccountId);
            if(!targetAccount){
                throw new Error('Não foi possível encontrar os recursos na conta destino.');
            }

            sourceAccount = await withdrawAccountUseCase.execute({
                accountId: data.sourceAccountId, 
                value: data.value
            });

            if(!sourceAccount){
                throw new Error('Não foi possível encontrar os recursos na conta origem.');
            } else if(!('transferLimit' in sourceAccount) || !('transferLimit' in targetAccount)) {
                throw new Error('Não é possível fazer transferencias envolvendo contas poupança.');
            }
        } catch(error) {
            throw error;
        }
        
        try{
            if(sourceAccount.transferLimit < data.value){
                throw new Error(`Valor acima do limite de transferência diário: ${sourceAccount.transferLimit}.`);
            }

            // const transaction: ITransferEntity = {
            //     date: new Date(),
            //     value: data.value,
            //     status: TransactionStatus.Completed,
            //     accountSourceId: sourceAccount.indexId!,
            //     accountSource: sourceAccount,
            //     targetSource: targetAccount,
            //     type: TransactionType.Transfer
            // };
            // this._repositoryTransactions.create(transaction);

            return await depositAccountUseCase.execute({
                accountId: data.targetAccountId, 
                value: data.value
            });
        } catch(error) {
            await depositAccountUseCase.execute({
                accountId: data.sourceAccountId, 
                value: data.value
            });
            throw error;
        }
    }
}

export default new TransferAccountUseCase(
    accountsRepository,
    transactionsRepository
);