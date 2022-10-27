"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
const clients_controller_1 = __importDefault(require("../controllers/clients.controller"));
const clients_middleware_1 = __importDefault(require("../middlewares/clients.middleware"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
class ClientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ClientsRoutes');
    }
    configureRoutes() {
        this.app.route(`/clients`)
            .all(auth_middleware_1.default.checkAuth)
            .get(clients_controller_1.default.listClients)
            .post(clients_middleware_1.default.validateRequiredClientBodyFields, clients_middleware_1.default.validateClientRepeated, clients_controller_1.default.createClient);
        this.app.route(`/clients/bulk`)
            .all(auth_middleware_1.default.checkAuth)
            .post(clients_middleware_1.default.uploadFile().single('file'), clients_middleware_1.default.parseXlsx, clients_controller_1.default.createClientBulk);
        this.app.route(`/clients/cep/:cep`)
            .all(auth_middleware_1.default.checkAuth)
            .get(clients_controller_1.default.clientsByCep);
        this.app.route(`/clients/:clientId`)
            .all(auth_middleware_1.default.checkAuth, clients_middleware_1.default.validateClientExists)
            .get(clients_controller_1.default.getClientById)
            .put(clients_middleware_1.default.validateRequiredClientBodyFields, clients_controller_1.default.updateClient)
            .delete(clients_controller_1.default.removeClient);
        return this.app;
    }
}
exports.ClientsRoutes = ClientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL2NsaWVudHMucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpRUFBNEQ7QUFDNUQsMkZBQWtFO0FBQ2xFLDJGQUFrRTtBQUVsRSxxRkFBNEQ7QUFFNUQsTUFBYSxhQUFjLFNBQVEseUNBQWtCO0lBQ2pELFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQzthQUNyQixHQUFHLENBQUMseUJBQWMsQ0FBQyxTQUFTLENBQUM7YUFDN0IsR0FBRyxDQUFDLDRCQUFpQixDQUFDLFdBQVcsQ0FBQzthQUNsQyxJQUFJLENBQ0QsNEJBQWlCLENBQUMsZ0NBQWdDLEVBQ2xELDRCQUFpQixDQUFDLHNCQUFzQixFQUN4Qyw0QkFBaUIsQ0FBQyxZQUFZLENBQ2pDLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDOUIsR0FBRyxDQUFDLHlCQUFjLENBQUMsU0FBUyxDQUFDO2FBQ3JCLElBQUksQ0FDRCw0QkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQzdDLDRCQUFpQixDQUFDLFNBQVMsRUFDM0IsNEJBQWlCLENBQUMsZ0JBQWdCLENBQ3JDLENBQUE7UUFFVCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzthQUNsQyxHQUFHLENBQUMseUJBQWMsQ0FBQyxTQUFTLENBQUM7YUFDckIsR0FBRyxDQUFDLDRCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO2FBQ3ZCLEdBQUcsQ0FDQSx5QkFBYyxDQUFDLFNBQVMsRUFDeEIsNEJBQWlCLENBQUMsb0JBQW9CLENBQ3JDO2FBQ0osR0FBRyxDQUFDLDRCQUFpQixDQUFDLGFBQWEsQ0FBQzthQUNwQyxHQUFHLENBQ0EsNEJBQWlCLENBQUMsZ0NBQWdDLEVBQ2xELDRCQUFpQixDQUFDLFlBQVksQ0FDakM7YUFDQSxNQUFNLENBQUMsNEJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFeEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQXpDRCxzQ0F5Q0MifQ==