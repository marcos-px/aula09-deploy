"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
const accounts_middleware_1 = __importDefault(require("../middlewares/accounts.middleware"));
const transactions_controller_1 = __importDefault(require("../controllers/transactions.controller"));
class TransactionsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'TransactionsRoutes');
    }
    configureRoutes() {
        this.app.route(`/accounts/:accountId/transactions`)
            .get(accounts_middleware_1.default.validateAccountExists, transactions_controller_1.default.listTransactions);
        return this.app;
    }
}
exports.TransactionsRoutes = TransactionsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25zLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9yb3V0ZXMvdHJhbnNhY3Rpb25zLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUVBQTREO0FBSzVELDZGQUFvRTtBQUNwRSxxR0FBNEU7QUFFNUUsTUFBYSxrQkFBbUIsU0FBUSx5Q0FBa0I7SUFDdEQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQzthQUM5QyxHQUFHLENBQ0EsNkJBQWtCLENBQUMscUJBQXFCLEVBQ3hDLGlDQUFzQixDQUFDLGdCQUFnQixDQUMxQyxDQUFDO1FBRU4sT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQWRELGdEQWNDIn0=