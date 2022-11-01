"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = mongoose_1.default.model(`transacoes`, new mongoose_1.default.Schema({
    date: Date,
    value: `number`,
    accountSourceId: `number`,
    status: `string`,
    accountSource: Object,
    type: `string`,
    targetSource: Object,
    envelop: `number`
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY29lcy5tb2RlbHMubW9uZ28uZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbW9uZ28vbW9kZWxzL3RyYW5zYWNvZXMubW9kZWxzLm1vbmdvLmRhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBRWhDLGtCQUFlLGtCQUFRLENBQUMsS0FBSyxDQUN6QixZQUFZLEVBQ1osSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBQztJQUNoQixJQUFJLEVBQUUsSUFBSTtJQUNWLEtBQUssRUFBRSxRQUFRO0lBQ2YsZUFBZSxFQUFFLFFBQVE7SUFDekIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsYUFBYSxFQUFFLE1BQU07SUFDckIsSUFBSSxFQUFFLFFBQVE7SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUsUUFBUTtDQUNwQixDQUFDLENBQ0wsQ0FBQyJ9