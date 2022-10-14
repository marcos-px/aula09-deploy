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
const array_database_1 = require("../../infrastructure/persistence/array.database");
class AccountsRepository {
    constructor(_database) {
        this._database = _database;
        this._type = 'account';
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._database.read(this._type, resourceId);
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            resource.indexId = this._database.create(this._type, resource);
            return resource;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._database.create(this._type, resourceId);
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
exports.default = new AccountsRepository(array_database_1.ArrayDatabase.getInstance());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVycy9yZXBvc2l0b3JpZXMvYWNjb3VudHMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLG9GQUFnRjtBQUdoRixNQUFNLGtCQUFrQjtJQUdwQixZQUFvQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRmhDLFVBQUssR0FBVyxTQUFTLENBQUM7SUFJbEMsQ0FBQztJQUVLLFFBQVEsQ0FBQyxVQUFrQjs7WUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxRQUF1Qjs7WUFDaEMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxVQUFrQjs7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUF1Qjs7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM1QyxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksa0JBQWtCLENBQ2pDLDhCQUFhLENBQUMsV0FBVyxFQUFFLENBQzFCLENBQUMifQ==