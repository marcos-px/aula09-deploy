"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoConfig = {
    host: process.env.MONGO_HOST,
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASS,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_NAME
};
exports.default = mongoConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL2NvbmZpZy9tb25nby5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBdUI7QUFFdkIsTUFBTSxXQUFXLEdBQUc7SUFDaEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtJQUM1QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVO0lBQ2hDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVU7SUFDaEMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtJQUM1QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVO0NBQ25DLENBQUE7QUFFRCxrQkFBZSxXQUFXLENBQUMifQ==