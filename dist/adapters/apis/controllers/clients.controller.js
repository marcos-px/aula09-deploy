"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/create.client.usecase"));
const read_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/read.client.usecase"));
const update_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/update.client.usecase"));
const delete_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/delete.client.usecase"));
const list_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/list.client.usecase"));
const debug_1 = __importDefault(require("debug"));
const clientsByCep_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/clientsByCep.client.usecase"));
const log = (0, debug_1.default)('app:clients-controller');
class ClientsController {
    listClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield list_client_usecase_1.default.execute();
            res.status(200).send(clients);
        });
    }
    getClientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield read_client_usecase_1.default.execute({
                clientId: Number(req.params.clientId)
            });
            res.status(200).send(client);
        });
    }
    createClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield create_client_usecase_1.default.execute(req.body);
            log(client);
            res.status(201).send(client);
        });
    }
    updateClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield update_client_usecase_1.default.execute(req.body);
            res.status(200).send(client);
        });
    }
    removeClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield delete_client_usecase_1.default.execute({
                clientId: Number(req.params.clientId)
            });
            res.status(204).send();
        });
    }
    createClientBulk(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let countUsers = 0;
            for (countUsers = 0; countUsers < req.body.fileData.length; countUsers++) {
                yield create_client_usecase_1.default.execute(req.body.fileData[countUsers]);
            }
            res.status(201).send({
                createdUsers: countUsers
            });
        });
    }
    clientsByCep(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield clientsByCep_client_usecase_1.default.execute(req.params.cep);
            res.status(200).send(clients);
        });
    }
}
exports.default = new ClientsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvY29udHJvbGxlcnMvY2xpZW50cy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUhBQXlGO0FBQ3pGLCtHQUFxRjtBQUNyRixtSEFBeUY7QUFDekYsbUhBQXlGO0FBQ3pGLCtHQUFxRjtBQUNyRixrREFBMEI7QUFDMUIsK0hBQXFHO0FBRXJHLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBRTdELE1BQU0saUJBQWlCO0lBQ2IsV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sT0FBTyxHQUFHLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzNELE1BQU0sTUFBTSxHQUFHLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUMzQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ3hDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMxRCxNQUFNLE1BQU0sR0FBRyxNQUFNLCtCQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFELE1BQU0sTUFBTSxHQUFHLE1BQU0sK0JBQW1CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFSyxZQUFZLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDMUQsTUFBTSxNQUFNLEdBQUcsTUFBTSwrQkFBbUIsQ0FBQyxPQUFPLENBQUM7Z0JBQzdDLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDeEMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM5RCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUM7Z0JBQ3BFLE1BQU0sK0JBQW1CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDcEU7WUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsWUFBWSxFQUFFLFVBQVU7YUFDM0IsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFELE1BQU0sT0FBTyxHQUFHLE1BQU0scUNBQXlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGlCQUFpQixFQUFFLENBQUMifQ==