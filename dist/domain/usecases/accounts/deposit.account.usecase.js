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
class DepositAccountUseCase {
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
                throw new Error("Conta não encontrada para depósito.");
            }
            const transaction = {
                date: new Date(),
                value: data.value,
                status: transactionstatus_entity_1.TransactionStatus.Completed,
                accountSourceId: account.indexId,
                accountSource: account,
                type: transactiontype_entity_1.TransactionType.Deposit,
                envelope: 123
            };
            this._repositoryTransactions.create(transaction);
            account.balance += data.value;
            return accounts_repository_1.default.updateById(account);
        });
    }
}
exports.default = new DepositAccountUseCase(accounts_repository_1.default, transactions_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwb3NpdC5hY2NvdW50LnVzZWNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3VzZWNhc2VzL2FjY291bnRzL2RlcG9zaXQuYWNjb3VudC51c2VjYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkdBQW9GO0FBR3BGLG1HQUF5RjtBQUN6RiwrRkFBcUY7QUFFckYscUhBQTRGO0FBRTVGLE1BQU0scUJBQXFCO0lBRXZCLFlBQ1ksbUJBQXdDLEVBQ3hDLHVCQUFnRDtRQURoRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFFNUQsQ0FBQztJQUVLLE9BQU8sQ0FBQyxJQUEwQzs7WUFDcEQsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO2FBQ3ZEO1lBQ0QsTUFBTSxPQUFPLEdBQUcsTUFBTSw2QkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xFLElBQUcsQ0FBQyxPQUFPLEVBQUM7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsTUFBTSxXQUFXLEdBQW1CO2dCQUNoQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsTUFBTSxFQUFFLDRDQUFpQixDQUFDLFNBQVM7Z0JBQ25DLGVBQWUsRUFBRSxPQUFPLENBQUMsT0FBUTtnQkFDakMsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLElBQUksRUFBRSx3Q0FBZSxDQUFDLE9BQU87Z0JBQzdCLFFBQVEsRUFBRSxHQUFHO2FBQ2hCLENBQUM7WUFDRixJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRWpELE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5QixPQUFPLDZCQUFrQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUkscUJBQXFCLENBQ3BDLDZCQUFrQixFQUNsQixpQ0FBc0IsQ0FDekIsQ0FBQyJ9