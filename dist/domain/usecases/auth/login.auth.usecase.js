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
exports.LoginAuthUseCase = void 0;
const clients_repository_1 = __importDefault(require("../../../adapters/repositories/clients.repository"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginAuthUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this._repository.readByWhere(data.user, data.pass);
            if (client) {
                const token = jsonwebtoken_1.default.sign(client, String(process.env.SECRET_KEY), {
                    expiresIn: '2 days'
                });
                return {
                    client: client,
                    token: token
                };
            }
            return;
        });
    }
}
exports.LoginAuthUseCase = LoginAuthUseCase;
exports.default = new LoginAuthUseCase(clients_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uYXV0aC51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9hdXRoL2xvZ2luLmF1dGgudXNlY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSwyR0FBa0Y7QUFDbEYsZ0VBQStCO0FBRS9CLE1BQWEsZ0JBQWdCO0lBQ3pCLFlBQW9CLFdBQStCO1FBQS9CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUVuRCxDQUFDO0lBRUssT0FBTyxDQUFDLElBQW9DOztZQUM5QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhFLElBQUcsTUFBTSxFQUFDO2dCQUVOLE1BQU0sS0FBSyxHQUFHLHNCQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDM0QsU0FBUyxFQUFFLFFBQVE7aUJBQ3RCLENBQUMsQ0FBQztnQkFFSCxPQUFPO29CQUNILE1BQU0sRUFBRSxNQUFNO29CQUNkLEtBQUssRUFBRSxLQUFLO2lCQUNmLENBQUM7YUFDTDtZQUVELE9BQU87UUFDWCxDQUFDO0tBQUE7Q0FDSjtBQXRCRCw0Q0FzQkM7QUFFRCxrQkFBZSxJQUFJLGdCQUFnQixDQUMvQiw0QkFBaUIsQ0FDcEIsQ0FBQyJ9