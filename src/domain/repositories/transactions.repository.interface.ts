import { ITransactionEntity } from "../entities/transactions/transaction.entity"

export interface ITransactionsRepository {
    readById(resourceId: number): Promise<ITransactionEntity | undefined>,
    create(resource: ITransactionEntity): Promise<ITransactionEntity>,
    deleteById(resourceId: string): Promise<void>,
    list(resourceId: string): Promise<ITransactionEntity[]>,
    updateById(resource: ITransactionEntity): Promise<ITransactionEntity | undefined>
}