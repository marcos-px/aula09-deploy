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
// import clientsService from '../../common/services/clients.service';
const read_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/read.client.usecase"));
const debug_1 = __importDefault(require("debug"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const xlsx_files_1 = __importDefault(require("../../../infrastructure/files/xlsx.files"));
const winston_logs_1 = __importDefault(require("../../../infrastructure/logs/winston.logs"));
const cpfvalidation_helpers_adapters_1 = __importDefault(require("../../helpers/cpfvalidation.helpers.adapters"));
const log = (0, debug_1.default)('app:clients-middleware');
class ClientsMiddleware {
    validateRequiredClientBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && (req.body.cpf || req.body.cnpj)) {
                if (req.body.cpf && !(0, cpfvalidation_helpers_adapters_1.default)(req.body.cpf)) {
                    res.status(400).send({ error: `Você deve enviar um cpf válido.` });
                }
                else {
                    next();
                }
            }
            else {
                res.status(400).send({ error: `Você deve enviar o campo cpf ou cnpj.` });
            }
        });
    }
    validateClientExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield read_client_usecase_1.default.execute({
                clientId: Number(req.params.clientId)
            });
            if (client) {
                winston_logs_1.default.info(['Cliente encontrado: ', client]);
                next();
            }
            else {
                winston_logs_1.default.error(`Usuário ${req.params.clientId} não existe`);
                res.status(404).send({ error: `Usuário ${req.params.clientId} não existe` });
            }
        });
    }
    validateClientRepeated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let resourceID = ('cpf' in req.body ? req.body.cpf : req.body.cnpj);
            const client = yield read_client_usecase_1.default.execute({
                clientId: resourceID
            });
            if (!client) {
                next();
            }
            else {
                res.status(409).send({ error: `Usuário ${resourceID} já existe existe` });
            }
        });
    }
    uploadFile() {
        return (0, multer_1.default)({
            storage: multer_1.default.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, path_1.default.resolve("uploads"));
                },
                filename: (req, file, cb) => {
                    cb(null, `${Date.now()}-${file.originalname.toLocaleLowerCase()}`);
                },
            }),
        });
    }
    parseXlsx(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.fileData = xlsx_files_1.default.parse(req.file.path);
            next();
        });
    }
}
exports.default = new ClientsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvY2xpZW50cy5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0VBQXNFO0FBQ3RFLCtHQUFxRjtBQUNyRixrREFBMEI7QUFDMUIsb0RBQTRCO0FBQzVCLGdEQUF3QjtBQUN4QiwwRkFBMEU7QUFDMUUsNkZBQStEO0FBQy9ELGtIQUF3RjtBQUV4RixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUU3RCxNQUFNLGlCQUFpQjtJQUNiLGdDQUFnQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDMUcsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0MsSUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUEsd0NBQTRCLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQztvQkFDM0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsaUNBQWlDLEVBQUMsQ0FBQyxDQUFDO2lCQUNwRTtxQkFBTTtvQkFDSCxJQUFJLEVBQUUsQ0FBQztpQkFDVjthQUNKO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLHVDQUF1QyxFQUFDLENBQUMsQ0FBQzthQUMxRTtRQUNMLENBQUM7S0FBQTtJQUVLLG9CQUFvQixDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDOUYsTUFB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