import { AccountEntity } from "../accounts/account.entity";
import { ITransactionEntity } from "./transaction.entity";

export interface ITransferEntity extends ITransactionEntity{
    targetSource: AccountEntity
}