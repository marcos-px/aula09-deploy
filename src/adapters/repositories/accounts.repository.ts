import { IDatabase } from "../../infrastructure/persistence/database.interface";
import { AccountEntity } from "../../domain/entities/accounts/account.entity"
import { ArrayDatabase } from "../../infrastructure/persistence/array.database";
import { IAccountsRepository } from "../../domain/repositories/accounts.repository.interface";

class AccountsRepository implements IAccountsRepository {
    private _type: string = 'account';

    constructor(private _database: IDatabase){

    }

    async readById(resourceId: number): Promise<AccountEntity | undefined> {
        return this._database.read(this._type, resourceId);
    }

    async create(resource: AccountEntity): Promise<AccountEntity> {
        resource.indexId = this._database.create(this._type, resource);
        return resource;
    }

    async deleteById(resourceId: number): Promise<void> {
        this._database.create(this._type, resourceId);
    }

    async list(): Promise<AccountEntity[]> {
        return this._database.list(this._type);
    }

    async updateById(resource: AccountEntity): Promise<AccountEntity | undefined> {
        this._database.update(this._type, resource);
        return resource;
    }
}

export default new AccountsRepository(
    ArrayDatabase.getInstance()
    );