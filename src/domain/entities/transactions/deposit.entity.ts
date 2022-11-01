import { ITransactionEntity } from "./transaction.entity";

export interface IDepositEntity extends ITransactionEntity{
    envelope: number
}