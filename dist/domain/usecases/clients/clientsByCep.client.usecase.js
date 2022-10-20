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
exports.ClientsByCepUseCase = void 0;
const clients_repository_1 = __importDefault(require("../../../adapters/repositories/clients.repository"));
class ClientsByCepUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.groupUsersByCep(cep);
        });
    }
}
exports.ClientsByCepUseCase = ClientsByCepUseCase;
exports.default = new ClientsByCepUseCase(clients_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50c0J5Q2VwLmNsaWVudC51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9jbGllbnRzL2NsaWVudHNCeUNlcC5jbGllbnQudXNlY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSwyR0FBa0Y7QUFFbEYsTUFBYSxtQkFBbUI7SUFDNUIsWUFBb0IsV0FBK0I7UUFBL0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO0lBRW5ELENBQUM7SUFFSyxPQUFPLENBQUMsR0FBVzs7WUFDckIsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FBQTtDQUNKO0FBUkQsa0RBUUM7QUFFRCxrQkFBZSxJQUFJLG1CQUFtQixDQUNsQyw0QkFBaUIsQ0FDcEIsQ0FBQyJ9