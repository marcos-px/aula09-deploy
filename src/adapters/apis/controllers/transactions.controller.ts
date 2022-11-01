import express from 'express';
import createClientUsecase from '../../../domain/usecases/clients/create.client.usecase';
import readClientUsecase from '../../../domain/usecases/clients/read.client.usecase';
import updateClientUsecase from '../../../domain/usecases/clients/update.client.usecase';
import deleteClientUsecase from '../../../domain/usecases/clients/delete.client.usecase';
import listClientUsecase from '../../../domain/usecases/clients/list.client.usecase';
import debug from 'debug';
import clientsByCepClientUsecase from '../../../domain/usecases/clients/clientsByCep.client.usecase';
import listTransactionsUsecase from '../../../domain/usecases/transactions/list.transactions.usecase';

const log: debug.IDebugger = debug('app:clients-controller');

class TransactionsController {
    async listTransactions(req: express.Request, res: express.Response){
        const transations = await listTransactionsUsecase.execute(req.params.accountId);
        res.status(200).send(transations);
    }
}

export default new TransactionsController();