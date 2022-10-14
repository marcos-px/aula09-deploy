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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRepository = void 0;
const array_database_1 = require("../../infrastructure/persistence/array.database");
class ClientsRepository {
    constructor(_database) {
        this._database = _database;
        this._type = 'client';
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._database.read(this._type, resourceId);
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            // resource.endereco = await this._viaCep.preencheEndereco(resource.cep);
            // if(!resource.endereco){
            //     resource.endereco = await this._apiCep.preencheEndereco(resource.cep);
            // }
            resource.indexId = this._database.create(this._type, resource);
            return resource;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._database.delete(this._type, resourceId);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._database.list(this._type);
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            this._database.update(this._type, resource);
            return resource;
        });
    }
}
exports.ClientsRepository = ClientsRepository;
exports.default = new ClientsRepository(array_database_1.ArrayDatabase.getInstance());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy9jbGllbnRzLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsb0ZBQWdGO0FBR2hGLE1BQWEsaUJBQWlCO0lBRzFCLFlBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFGaEMsVUFBSyxHQUFXLFFBQVEsQ0FBQztJQUlqQyxDQUFDO0lBRUssUUFBUSxDQUFDLFVBQWtCOztZQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLFFBQXNCOztZQUUvQix5RUFBeUU7WUFFekUsMEJBQTBCO1lBQzFCLDZFQUE2RTtZQUM3RSxJQUFJO1lBRUosUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxVQUFrQjs7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUFzQjs7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM1QyxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7Q0FDSjtBQW5DRCw4Q0FtQ0M7QUFFRCxrQkFBZSxJQUFJLGlCQUFpQixDQUNoQyw4QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUMxQixDQUFDIn0=