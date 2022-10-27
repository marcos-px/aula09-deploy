import express from 'express';
import createClientUsecase from '../../../domain/usecases/clients/create.client.usecase';
import readClientUsecase from '../../../domain/usecases/clients/read.client.usecase';
import updateClientUsecase from '../../../domain/usecases/clients/update.client.usecase';
import deleteClientUsecase from '../../../domain/usecases/clients/delete.client.usecase';
import listClientUsecase from '../../../domain/usecases/clients/list.client.usecase';
import debug from 'debug';
import clientsByCepClientUsecase from '../../../domain/usecases/clients/clientsByCep.client.usecase';
import loginAuthUsecase from '../../../domain/usecases/auth/login.auth.usecase';

const log: debug.IDebugger = debug('app:auth-controller');

class AuthController {
    async login(req: express.Request, res: express.Response){
        const client = await loginAuthUsecase.execute(req.body);
        if(client){
            res.status(200).send(client);
        } else {
            res.status(401).send({
                error: `Dados incorretos.`
            });
        }
        
    }
}

export default new AuthController();