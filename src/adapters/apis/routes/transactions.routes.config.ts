import { CommonRoutesConfig } from "./common.routes.config";
import ClientsController from "../controllers/clients.controller";
import ClientsMiddleware from "../middlewares/clients.middleware";
import express from "express";
import authMiddleware from "../middlewares/auth.middleware";
import accountsMiddleware from "../middlewares/accounts.middleware";
import transactionsController from "../controllers/transactions.controller";

export class TransactionsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'TransactionsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/accounts/:accountId/transactions`)
            .get(
                accountsMiddleware.validateAccountExists,
                transactionsController.listTransactions
            );

        return this.app;
    }
}