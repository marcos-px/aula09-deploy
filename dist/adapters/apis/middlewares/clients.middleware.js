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
const log = (0, debug_1.default)('app:clients-middleware');
class ClientsMiddleware {
    validateRequiredClientBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && (req.body.cpf || req.body.cnpj)) {
                next();
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
                next();
            }
            else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvY2xpZW50cy5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0VBQXNFO0FBQ3RFLCtHQUFxRjtBQUNyRixrREFBMEI7QUFDMUIsb0RBQTRCO0FBQzVCLGdEQUF3QjtBQUN4QiwwRkFBMEU7QUFFMUUsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFN0QsTUFBTSxpQkFBaUI7SUFDYixnQ0FBZ0MsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzFHLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdDLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsdUNBQXVDLEVBQUMsQ0FBQyxDQUFDO2FBQzFFO1FBQ0wsQ0FBQztLQUFBO0lBRUssb0JBQW9CLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUM5RixNQUFNLE1BQU0sR0FBRyxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDM0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUN4QyxDQUFDLENBQUM7WUFDSCxJQUFJLE1BQU0sRUFBRTtnQkFDUixJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLGFBQWEsRUFBQyxDQUFDLENBQUM7YUFDOUU7UUFDTCxDQUFDO0tBQUE7SUFFSyxzQkFBc0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ2hHLElBQUksVUFBVSxHQUFXLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVFLE1BQU0sTUFBTSxHQUFHLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUMzQyxRQUFRLEVBQUUsVUFBVTthQUN2QixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNULElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxVQUFVLG1CQUFtQixFQUFDLENBQUMsQ0FBQzthQUMzRTtRQUNMLENBQUM7S0FBQTtJQUVELFVBQVU7UUFDTixPQUFPLElBQUEsZ0JBQU0sRUFBQztZQUNWLE9BQU8sRUFBRSxnQkFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDeEIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRTtvQkFDM0IsRUFBRSxDQUFDLElBQUksRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQ0QsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRTtvQkFDeEIsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFBO2dCQUN0RSxDQUFDO2FBQ0osQ0FBQztTQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFSyxTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUNuRixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RCxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIn0=