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
const withdraw_account_usecase_1 = __importDefault(require("./withdraw.account.usecase"));
const deposit_account_usecase_1 = __importDefault(require("./deposit.account.usecase"));
const transactions_repository_1 = __importDefault(require("../../../adapters/repositories/transactions.repository"));
const transactionstatus_entity_1 = require("../../entities/transactions/transactionstatus.entity");
const transactiontype_entity_1 = require("../../entities/transactions/transactiontype.entity");
class TransferAccountUseCase {
    constructor(_repositoryAccounts, _repositoryTransactions) {
        this._repositoryAccounts = _repositoryAccounts;
        this._repositoryTransactions = _repositoryTransactions;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let sourceAccount;
            let targetAccount;
            try {
                targetAccount = yield accounts_repository_1.default.readById(data.targetAccountId);
                if (!targetAccount) {
                    throw new Error('Não foi possível encontrar os recursos na conta destino.');
                }
                sourceAccount = yield withdraw_account_usecase_1.default.execute({
                    accountId: data.sourceAccountId,
                    value: data.value
                });
                if (!sourceAccount) {
                    throw new Error('Não foi possível encontrar os recursos na conta origem.');
                }
                else if (!('transferLimit' in sourceAccount) || !('transferLimit' in targetAccount)) {
                    throw new Error('Não é possível fazer transferencias envolvendo contas poupança.');
                }
            }
            catch (error) {
                throw error;
            }
            try {
                if (sourceAccount.transferLimit < data.value) {
                    throw new Error(`Valor acima do limite de transferência diário: ${sourceAccount.transferLimit}.`);
                }
                const transaction = {
                    date: new Date(),
                    value: data.value,
                    status: transactionstatus_entity_1.TransactionStatus.Completed,
                    accountSourceId: sourceAccount.indexId,
                    accountSource: sourceAccount,
                    targetSource: targetAccount,
                    type: transactiontype_entity_1.TransactionType.Transfer
                };
                this._repositoryTransactions.create(transaction);
                return yield deposit_account_usecase_1.default.execute({
                    accountId: data.targetAccountId,
                    value: data.value
                });
            }
            catch (error) {
                yield deposit_account_usecase_1.default.execute({
                    accountId: data.sourceAccountId,
                    value: data.value
                });
                throw error;
            }
        });
    }
}
exports.default = new TransferAccountUseCase(accounts_repository_1.default, transactions_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuYWNjb3VudC51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9hY2NvdW50cy90cmFuc2Zlci5hY2NvdW50LnVzZWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2R0FBb0Y7QUFFcEYsMEZBQWdFO0FBQ2hFLHdGQUE4RDtBQUM5RCxxSEFBNEY7QUFHNUYsbUdBQXlGO0FBQ3pGLCtGQUFxRjtBQUVyRixNQUFNLHNCQUFzQjtJQUV4QixZQUNZLG1CQUF3QyxFQUN4Qyx1QkFBZ0Q7UUFEaEQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBRTVELENBQUM7SUFFSyxPQUFPLENBQUMsSUFBeUU7O1lBQ25GLElBQUksYUFBd0MsQ0FBQztZQUM3QyxJQUFJLGFBQXdDLENBQUM7WUFDN0MsSUFBRztnQkFDQyxhQUFhLEdBQUcsTUFBTSw2QkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN4RSxJQUFHLENBQUMsYUFBYSxFQUFDO29CQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztpQkFDL0U7Z0JBRUQsYUFBYSxHQUFHLE1BQU0sa0NBQXNCLENBQUMsT0FBTyxDQUFDO29CQUNqRCxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWU7b0JBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztpQkFDcEIsQ0FBQyxDQUFDO2dCQUVILElBQUcsQ0FBQyxhQUFhLEVBQUM7b0JBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO2lCQUM5RTtxQkFBTSxJQUFHLENBQUMsQ0FBQyxlQUFlLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsSUFBSSxhQUFhLENBQUMsRUFBRTtvQkFDbEYsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO2lCQUN0RjthQUNKO1lBQUMsT0FBTSxLQUFLLEVBQUU7Z0JBQ1gsTUFBTSxLQUFLLENBQUM7YUFDZjtZQUVELElBQUc7Z0JBQ0MsSUFBRyxhQUFhLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7b0JBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELGFBQWEsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2lCQUNyRztnQkFFRCxNQUFNLFdBQVcsR0FBb0I7b0JBQ2pDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtvQkFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixNQUFNLEVBQUUsNENBQWlCLENBQUMsU0FBUztvQkFDbkMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxPQUFRO29CQUN2QyxhQUFhLEVBQUUsYUFBYTtvQkFDNUIsWUFBWSxFQUFFLGFBQWE7b0JBQzNCLElBQUksRUFBRSx3Q0FBZSxDQUFDLFFBQVE7aUJBQ2pDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFakQsT0FBTyxNQUFNLGlDQUFxQixDQUFDLE9BQU8sQ0FBQztvQkFDdkMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlO29CQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ3BCLENBQUMsQ0FBQzthQUNOO1lBQUMsT0FBTSxLQUFLLEVBQUU7Z0JBQ1gsTUFBTSxpQ0FBcUIsQ0FBQyxPQUFPLENBQUM7b0JBQ2hDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZTtvQkFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2lCQUNwQixDQUFDLENBQUM7Z0JBQ0gsTUFBTSxLQUFLLENBQUM7YUFDZjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxzQkFBc0IsQ0FDckMsNkJBQWtCLEVBQ2xCLGlDQUFzQixDQUN6QixDQUFDIn0=