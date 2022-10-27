"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
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
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('pessoas', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS1wZXNzb2FzLnNlZWRlcnMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvc2VlZGVycy8xLXBlc3NvYXMuc2VlZGVycy5teXNxbC5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDeEM7Z0JBQ0ksVUFBVSxFQUFFLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsSUFBSTtnQkFDckIsYUFBYSxFQUFFLGFBQWE7YUFDL0I7WUFDRDtnQkFDSSxVQUFVLEVBQUUsQ0FBQztnQkFDYixLQUFLLEVBQUUsVUFBVTtnQkFDakIsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsSUFBSTthQUN0QjtZQUNEO2dCQUNJLFVBQVUsRUFBRSxDQUFDO2dCQUNiLEtBQUssRUFBRSxTQUFTO2dCQUNoQixPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLEdBQUc7Z0JBQ3BCLGFBQWEsRUFBRSxhQUFhO2FBQy9CO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUMvQyxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDSixDQUFDIn0=