import { ClientEntity } from "../../../domain/entities/clients/client.entity";
import { IPessoaEntity } from "../../../domain/entities/clients/pessoa.entity";
import IMocks from "./mocks.interface";
import { faker } from '@faker-js/faker';
import { IPessoaFisicaEntity } from "../../../domain/entities/clients/pessoafisica.entity";
import { IPessoaJuridicaEntity } from "../../../domain/entities/clients/pessoajuridica.entity";

export default class FakerMocks implements IMocks{
    getClients(): ClientEntity[] {
        let pessoas: IPessoaEntity[] = [];
        pessoas = this._getPessoas();
        const half = Math.ceil(pessoas.length / 2);
        const pessoasFisicas = this._getPessoasFisicas(pessoas.slice(0, half));
        const pessoasJuridicas = this._getPessoasJuridicas(pessoas.slice(half));
        return (pessoasFisicas as IPessoaEntity[]).concat(pessoasJuridicas) as ClientEntity[];
    }

    private _getPessoas(): IPessoaEntity[] {
        const pessoas: IPessoaEntity[] = [];
        Array.from({ length: 10 }).forEach(() => {
            pessoas.push({
                cep: faker.address.zipCode('########'),
                limiteCredito: Number(faker.finance.amount(0, 10000)),
                observacoes: faker.random.words(10)
            });
        });
        return pessoas;
    }

    private _getPessoasFisicas(pessoas: IPessoaEntity[]): IPessoaFisicaEntity[] {
        const pessoasFisicas: IPessoaFisicaEntity[] = [];
        pessoas.forEach((pessoa) => {
            pessoasFisicas.push({ ...pessoa, ...{ nome: faker.name.fullName(), cpf: Number(faker.random.numeric(11)) } });
        });
        return pessoasFisicas;
    }

    private _getPessoasJuridicas(pessoas: IPessoaEntity[]): IPessoaJuridicaEntity[] {
        const pessoasJuridicas: IPessoaJuridicaEntity[] = [];
        pessoas.forEach((pessoa) => {
            pessoasJuridicas.push({ ...pessoa, ...{ razaoSocial: faker.company.name(), cnpj: Number(faker.random.numeric(14)) } });
        });
        return pessoasJuridicas;
    }
}