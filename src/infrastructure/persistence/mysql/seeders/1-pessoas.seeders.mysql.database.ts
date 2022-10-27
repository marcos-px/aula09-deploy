import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('pessoas', [
            {
                "idpessoa": 1,
                "cep": "35530000",
                "email": "pessoa1@bancoborges.com",
                "senha": "123456",
                "limiteCredito": 1000,
                "observacoes": "Bom pagador"
            },
            {
                "idpessoa": 2,
                "cep": "32676265",
                "email": "pessoa2@bancoborges.com",
                "senha": "123456",
                "limiteCredito": 0,
                "observacoes": null
            },
            {
                "idpessoa": 3,
                "cep": "1001000",
                "email": "pessoa3@bancoborges.com",
                "senha": "123456",
                "limiteCredito": 100,
                "observacoes": "Mal pagador"
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('pessoas', {});
    }
};