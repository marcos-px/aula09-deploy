import { AccountEntity } from "../accounts/account.entity";
import { TransactionStatus } from "./transactionstatus.entity";
import { TransactionType } from "./transactiontype.entity";

export interface ITransactionEntity{
    indexId?: number,
    date: Date,
    value: number,
    status: TransactionStatus,
    accountSource: AccountEntity
    accountSourceId: number,
    type: TransactionType
}