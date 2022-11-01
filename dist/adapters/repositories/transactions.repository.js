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
exports.TransactionsRepository = void 0;
const mongo_database_1 = require("../../infrastructure/persistence/mongo/mongo.database");
const transacoes_models_mongo_database_1 = __importDefault(require("../../infrastructure/persistence/mongo/models/transacoes.models.mongo.database"));
class TransactionsRepository {
    constructor(_database, _modelTransacoes) {
        this._database = _database;
        this._modelTransacoes = _modelTransacoes;
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaction = yield this._database.read(this._modelTransacoes, resourceId);
                return transaction;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionModel = yield this._database.create(this._modelTransacoes, resource);
            resource.indexId = transactionModel._id;
            return resource;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelTransacoes, { _id: resourceId });
        });
    }
    list(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactions = this._database.list(this._modelTransacoes, {
                accountSourceId: Number(resourceId)
            });
            return transactions;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let transactionDoc = yield this._database.read(this._modelTransacoes, resource.indexId);
            yield this._database.update(transactionDoc, resource);
            return resource;
        });
    }
}
exports.TransactionsRepository = TransactionsRepository;
exports.default = new TransactionsRepository(mongo_database_1.MongoDatabase.getInstance(), transacoes_models_mongo_database_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25zLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWRhcHRlcnMvcmVwb3NpdG9yaWVzL3RyYW5zYWN0aW9ucy5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUdBLDBGQUFzRjtBQUN0RixzSkFBMkg7QUFHM0gsTUFBYSxzQkFBc0I7SUFDL0IsWUFDWSxTQUFvQixFQUNwQixnQkFBcUM7UUFEckMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXFCO0lBRWpELENBQUM7SUFFSyxRQUFRLENBQUMsVUFBa0I7O1lBQzdCLElBQUc7Z0JBQ0MsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ2pGLE9BQU8sV0FBVyxDQUFDO2FBQ3RCO1lBQUMsT0FBTSxHQUFHLEVBQUM7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBNEI7O1lBQ3JDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEYsUUFBUSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7WUFDeEMsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFVBQWtCOztZQUMvQixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLENBQUM7S0FBQTtJQUVLLElBQUksQ0FBQyxVQUFrQjs7WUFDekIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUM1RCxlQUFlLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQzthQUN0QyxDQUFDLENBQUM7WUFDSCxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsUUFBNEI7O1lBQ3pDLElBQUksY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4RixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0RCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7Q0FDSjtBQXRDRCx3REFzQ0M7QUFFRCxrQkFBZSxJQUFJLHNCQUFzQixDQUNyQyw4QkFBYSxDQUFDLFdBQVcsRUFBRSxFQUMzQiwwQ0FBNkIsQ0FDNUIsQ0FBQyJ9