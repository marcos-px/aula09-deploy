import { ITransactionsRepository } from "../../domain/repositories/transactions.repository.interface";
import { IDatabase } from "../../infrastructure/persistence/database.interface";
import mongoose from "mongoose";
import { MongoDatabase } from "../../infrastructure/persistence/mongo/mongo.database";
import transacoesModelsMongoDatabase from "../../infrastructure/persistence/mongo/models/transacoes.models.mongo.database";
import { ITransactionEntity } from "../../domain/entities/transactions/transaction.entity";

export class TransactionsRepository implements ITransactionsRepository {
    constructor(
        private _database: IDatabase, 
        private _modelTransacoes: mongoose.Model<any>
        ){
    }

    async readById(resourceId: number): Promise<ITransactionEntity | undefined> {
        try{
            const transaction = await this._database.read(this._modelTransacoes, resourceId);
            return transaction;
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async create(resource: ITransactionEntity): Promise<ITransactionEntity> {
        const transactionModel = await this._database.create(this._modelTransacoes, resource);
        resource.indexId = transactionModel._id;
        return resource;
    }

    async deleteById(resourceId: string): Promise<void> {
        await this._database.delete(this._modelTransacoes, { _id: resourceId });
    }

    async list(resourceId: string): Promise<ITransactionEntity[]> {
        const transactions = this._database.list(this._modelTransacoes, {
            accountSourceId: Number(resourceId)
        });
        return transactions;
    }

    async updateById(resource: ITransactionEntity): Promise<ITransactionEntity | undefined> {
        let transactionDoc = await this._database.read(this._modelTransacoes, resource.indexId);
        await this._database.update(transactionDoc, resource);
        return resource;
    }
}

export default new TransactionsRepository(
    MongoDatabase.getInstance(),
    transacoesModelsMongoDatabase
    );