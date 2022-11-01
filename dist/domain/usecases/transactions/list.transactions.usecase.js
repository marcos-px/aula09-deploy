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
const transactions_repository_1 = __importDefault(require("../../../adapters/repositories/transactions.repository"));
class ListTransactionsUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.list(accountId);
        });
    }
}
exports.default = new ListTransactionsUseCase(transactions_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC50cmFuc2FjdGlvbnMudXNlY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb21haW4vdXNlY2FzZXMvdHJhbnNhY3Rpb25zL2xpc3QudHJhbnNhY3Rpb25zLnVzZWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSxxSEFBNEY7QUFFNUYsTUFBTSx1QkFBdUI7SUFFekIsWUFBb0IsV0FBb0M7UUFBcEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO0lBRXhELENBQUM7SUFFSyxPQUFPLENBQUMsU0FBaUI7O1lBQzNCLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksdUJBQXVCLENBQ3RDLGlDQUFzQixDQUN6QixDQUFDIn0=