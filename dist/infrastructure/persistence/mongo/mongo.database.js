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
exports.MongoDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_config_1 = __importDefault(require("../../config/mongo.config"));
class MongoDatabase {
    constructor() {
        this._db = mongo_config_1.default.database;
        this._username = mongo_config_1.default.username;
        this._password = mongo_config_1.default.password;
        this._host = mongo_config_1.default.host;
        this._port = Number(mongo_config_1.default.port);
        //mongodb://user:password@localhost:27017/test
        mongoose_1.default.connect(`mongodb://${this._username}:${this._password}@${this._host}:${this._port}/${this._db}`);
        // mongoose.connect(`mongodb://${this._host}:${this._port}/${this._db}`);
    }
    static getInstance() {
        if (!MongoDatabase._instance) {
            MongoDatabase._instance = new MongoDatabase();
        }
        return MongoDatabase._instance;
    }
    create(model, data) {
        return model.create(data);
    }
    update(doc, data) {
        return __awaiter(this, void 0, void 0, function* () {
            doc.overwrite(data);
            return doc.save();
        });
    }
    list(model, dataWhere) {
        return model.find(dataWhere);
    }
    delete(model, dataWhere) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield model.deleteOne(dataWhere);
            return (result.deletedCount > 0);
        });
    }
    read(model, dataId) {
        try {
            return model.findById(dataId);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
exports.MongoDatabase = MongoDatabase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbW9uZ28vbW9uZ28uZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLDZFQUFvRDtBQUdwRCxNQUFhLGFBQWE7SUFRdEI7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLHNCQUFXLENBQUMsUUFBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsc0JBQVcsQ0FBQyxRQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxzQkFBVyxDQUFDLFFBQVMsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFXLENBQUMsSUFBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLHNCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsOENBQThDO1FBQzlDLGtCQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxRyx5RUFBeUU7SUFDN0UsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQzFCLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUNqRDtRQUVELE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQTBCLEVBQUUsSUFBUztRQUN4QyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVLLE1BQU0sQ0FBQyxHQUEyQixFQUFFLElBQVM7O1lBQy9DLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBO0lBRUQsSUFBSSxDQUFDLEtBQTBCLEVBQUUsU0FBYztRQUMzQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVLLE1BQU0sQ0FBQyxLQUEwQixFQUFFLFNBQWM7O1lBQ25ELE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVoRCxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFRCxJQUFJLENBQUMsS0FBMEIsRUFBRSxNQUFjO1FBQzNDLElBQUc7WUFDQyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakM7UUFBQyxPQUFNLEdBQUcsRUFBQztZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUUsR0FBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztDQUNKO0FBdERELHNDQXNEQyJ9