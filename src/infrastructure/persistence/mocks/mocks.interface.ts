import { ClientEntity } from "../../../domain/entities/clients/client.entity";

export default interface IMocks {
    getClients(): ClientEntity[];
}