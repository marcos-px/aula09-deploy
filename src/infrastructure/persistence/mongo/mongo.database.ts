import mongoose from 'mongoose';
import mongoConfig from '../../config/mongo.config';
import { IDatabase } from '../database.interface';

export class MongoDatabase implements IDatabase {
    private static _instance: MongoDatabase;
    private _db: string;
    private _username: string;
    private _password: string;
    private _host: string;
    private _port: number;

    private constructor(){
        this._db = mongoConfig.database!;
        this._username = mongoConfig.username!;
        this._password = mongoConfig.password!;
        this._host = mongoConfig.host!;
        this._port = Number(mongoConfig.port);

        //mongodb://user:password@localhost:27017/test
        mongoose.connect(`mongodb://${this._username}:${this._password}@${this._host}:${this._port}/${this._db}?authSource=admin`);
        // mongoose.connect(`mongodb://${this._host}:${this._port}/${this._db}`);
    }

    public static getInstance(): MongoDatabase {
        if (!MongoDatabase._instance) {
            MongoDatabase._instance = new MongoDatabase();
        }

        return MongoDatabase._instance;
    }

    create(model: mongoose.Model<any>, data: any): any {
        return model.create(data);
    }

    async update(doc: mongoose.Document<any>, data: any): Promise<any> {
        doc.overwrite(data);
        return doc.save();
    }

    list(model: mongoose.Model<any>, dataWhere: any): any {
        return model.find(dataWhere);
    }

    async delete(model: mongoose.Model<any>, dataWhere: any): Promise<any> {
        const result = await model.deleteOne(dataWhere);

        return (result.deletedCount > 0);
    }

    read(model: mongoose.Model<any>, dataId: string): any {
        try{
            return model.findById(dataId);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }
}