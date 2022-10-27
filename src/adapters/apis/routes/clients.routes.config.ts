import { CommonRoutesConfig } from "./common.routes.config";
import ClientsController from "../controllers/clients.controller";
import ClientsMiddleware from "../middlewares/clients.middleware";
import express from "express";
import authMiddleware from "../middlewares/auth.middleware";

export class ClientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/clients`)
            .all(authMiddleware.checkAuth)
            .get(ClientsController.listClients)
            .post(
                ClientsMiddleware.validateRequiredClientBodyFields,
                ClientsMiddleware.validateClientRepeated,
                ClientsController.createClient
            );

            this.app.route(`/clients/bulk`)
            .all(authMiddleware.checkAuth)
                    .post(
                        ClientsMiddleware.uploadFile().single('file'),
                        ClientsMiddleware.parseXlsx,
                        ClientsController.createClientBulk
                    )

            this.app.route(`/clients/cep/:cep`)
            .all(authMiddleware.checkAuth)
                    .get(ClientsController.clientsByCep);

            this.app.route(`/clients/:clientId`)
                        .all(
                            authMiddleware.checkAuth,
                            ClientsMiddleware.validateClientExists,
                            )
                        .get(ClientsController.getClientById)
                        .put(
                            ClientsMiddleware.validateRequiredClientBodyFields,
                            ClientsController.updateClient
                        )
                        .delete(ClientsController.removeClient);

        return this.app;
    }
}