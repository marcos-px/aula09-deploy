"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
class FakerMocks {
    getClients() {
        let pessoas = [];
        pessoas = this._getPessoas();
        const half = Math.ceil(pessoas.length / 2);
        const pessoasFisicas = this._getPessoasFisicas(pessoas.slice(0, half));
        const pessoasJuridicas = this._getPessoasJuridicas(pessoas.slice(half));
        return pessoasFisicas.concat(pessoasJuridicas);
    }
    _getPessoas() {
        const pessoas = [];
        Array.from({ length: 10 }).forEach(() => {
            pessoas.push({
                cep: faker_1.faker.address.zipCode('########'),
                limiteCredito: Number(faker_1.faker.finance.amount(0, 10000)),
                observacoes: faker_1.faker.random.words(10)
            });
        });
        return pessoas;
    }
    _getPessoasFisicas(pessoas) {
        const pessoasFisicas = [];
        pessoas.forEach((pessoa) => {
            pessoasFisicas.push(Object.assign(Object.assign({}, pessoa), { nome: faker_1.faker.name.fullName(), cpf: Number(faker_1.faker.random.numeric(11)) }));
        });
        return pessoasFisicas;
    }
    _getPessoasJuridicas(pessoas) {
        const pessoasJuridicas = [];
        pessoas.forEach((pessoa) => {
            pessoasJuridicas.push(Object.assign(Object.assign({}, pessoa), { razaoSocial: faker_1.faker.company.name(), cnpj: Number(faker_1.faker.random.numeric(14)) }));
        });
        return pessoasJuridicas;
    }
}
exports.default = FakerMocks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZXIubW9ja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbW9ja3MvZmFrZXIubW9ja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwyQ0FBd0M7QUFJeEMsTUFBcUIsVUFBVTtJQUMzQixVQUFVO1FBQ04sSUFBSSxPQUFPLEdBQW9CLEVBQUUsQ0FBQztRQUNsQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2RSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEUsT0FBUSxjQUFrQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBbUIsQ0FBQztJQUMxRixDQUFDO0lBRU8sV0FBVztRQUNmLE1BQU0sT0FBTyxHQUFvQixFQUFFLENBQUM7UUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDVCxHQUFHLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUN0QyxhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDckQsV0FBVyxFQUFFLGFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzthQUN0QyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxPQUF3QjtRQUMvQyxNQUFNLGNBQWMsR0FBMEIsRUFBRSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN2QixjQUFjLENBQUMsSUFBSSxpQ0FBTSxNQUFNLEdBQUssRUFBRSxJQUFJLEVBQUUsYUFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRyxDQUFDO1FBQ2xILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUVPLG9CQUFvQixDQUFDLE9BQXdCO1FBQ2pELE1BQU0sZ0JBQWdCLEdBQTRCLEVBQUUsQ0FBQztRQUNyRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdkIsZ0JBQWdCLENBQUMsSUFBSSxpQ0FBTSxNQUFNLEdBQUssRUFBRSxXQUFXLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRyxDQUFDO1FBQzNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0NBQ0o7QUFyQ0QsNkJBcUNDIn0=