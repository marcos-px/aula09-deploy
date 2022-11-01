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
const accounts_repository_1 = __importDefault(require("../../../adapters/repositories/accounts.repository"));
const transactionstatus_entity_1 = require("../../entities/transactions/transactionstatus.entity");
const transactiontype_entity_1 = require("../../entities/transactions/transactiontype.entity");
const transactions_repository_1 = __importDefault(require("../../../adapters/repositories/transactions.repository"));
class WithdrawAccountUseCase {
    constructor(_repositoryAccounts, _repositoryTransactions) {
        this._repositoryAccounts = _repositoryAccounts;
        this._repositoryTransactions = _repositoryTransactions;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data.value <= 0) {
                throw new Error("O valor deve ser maior que zero.");
            }
            const account = yield accounts_repository_1.default.readById(data.accountId);
            if (!account) {
                throw new Error("Conta não encontrada para saque.");
            }
            else if (account.balance < data.value) {
                throw new Error("Você não tem saldo suficiente para esse saque.");
            }
            account.balance -= data.value;
            /**
             * Aqui teria algum comando para envio do dinheiro para o cliente em um ambiente real.
             */
            const transaction = {
                date: new Date(),
                value: data.value,
                status: transactionstatus_entity_1.TransactionStatus.Completed,
                accountSourceId: account.indexId,
                accountSource: account,
                type: transactiontype_entity_1.TransactionType.Withdraw
            };
            this._repositoryTransactions.create(transaction);
            return accounts_repository_1.default.updateById(account);
        });
    }
}
exports.default = new WithdrawAccountUseCase(accounts_repository_1.default, transactions_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXcuYWNjb3VudC51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9hY2NvdW50cy93aXRoZHJhdy5hY2NvdW50LnVzZWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2R0FBb0Y7QUFHcEYsbUdBQXlGO0FBQ3pGLCtGQUFxRjtBQUVyRixxSEFBNEY7QUFFNUYsTUFBTSxzQkFBc0I7SUFFeEIsWUFDWSxtQkFBd0MsRUFDeEMsdUJBQWdEO1FBRGhELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUU1RCxDQUFDO0lBRUssT0FBTyxDQUFDLElBQTBDOztZQUNwRCxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7YUFDdkQ7WUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLDZCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFbEUsSUFBRyxDQUFDLE9BQU8sRUFBRTtnQkFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7YUFDdkQ7aUJBQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQzthQUNyRTtZQUVELE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztZQUU5Qjs7ZUFFRztZQUVGLE1BQU0sV0FBVyxHQUFvQjtnQkFDbEMsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLE1BQU0sRUFBRSw0Q0FBaUIsQ0FBQyxTQUFTO2dCQUNuQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE9BQVE7Z0JBQ2pDLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixJQUFJLEVBQUUsd0NBQWUsQ0FBQyxRQUFRO2FBQ2pDLENBQUM7WUFDRixJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRWpELE9BQU8sNkJBQWtCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxzQkFBc0IsQ0FDckMsNkJBQWtCLEVBQ2xCLGlDQUFzQixDQUN6QixDQUFDIn0=