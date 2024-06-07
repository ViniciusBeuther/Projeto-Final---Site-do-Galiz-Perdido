class Filter{
    constructor(){
        this.neighborhood = [
            { key: 1, value: "Alpino" },
            { key: 2, value: "Área Rural de São Bento do Sul" },
            { key: 3, value: "Bela Aliança" },
            { key: 4, value: "Boehmerwald" },
            { key: 5, value: "Brasília" },
            { key: 6, value: "Centenário" },
            { key: 7, value: "Centro" },
            { key: 8, value: "Colonial" },
            { key: 9, value: "Cruzeiro" },
            { key: 10, value: "Dona Francisca" },
            { key: 11, value: "Industrial Sudoeste" },
            { key: 12, value: "Lençol" },
            { key: 13, value: "Mato Preto" },
            { key: 14, value: "Oxford" },
            { key: 15, value: "Progresso" },
            { key: 16, value: "Rio Negro" },
            { key: 17, value: "Rio Vermelho Estação" },
            { key: 18, value: "Rio Vermelho Povoado" },
            { key: 19, value: "Schramm" },
            { key: 20, value: "Serra Alta" },
            { key: 21, value: "25 de Julho" },
            { key: 22, value: "Bairro" },
          ],
        this.selected = "Bairro"
    }

    setFilter( selectedHood ){
        this.selected = selectedHood
    }

    matchNeighborhood( hood ){
        
    }
}

export default Filter;