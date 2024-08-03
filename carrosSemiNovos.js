const carros = [
    { anoFabricacao: 2023, modelo: 'Modelo A', cor: 'Preto' },
    { anoFabricacao: 2022, modelo: 'Modelo B', cor: 'Branco' },
    { anoFabricacao: 2020, modelo: 'Modelo C', cor: 'Vermelho' },
    { anoFabricacao: 2021, modelo: 'Modelo D', cor: 'Azul' },
    { anoFabricacao: 2019, modelo: 'Modelo E', cor: 'Preto' },
    { anoFabricacao: 2021, modelo: 'Modelo F', cor: 'Verde' },
    { anoFabricacao: 2020, modelo: 'Modelo G', cor: 'Amarelo' },
    { anoFabricacao: 2018, modelo: 'Modelo H', cor: 'Roxo' },
    { anoFabricacao: 2017, modelo: 'Modelo I', cor: 'Marrom' },
    { anoFabricacao: 2023, modelo: 'Modelo J', cor: 'Preto' }
];

function exibirCarros() {
    const anoAtual = new Date().getFullYear();
    const divListaCarros = document.getElementById('listaCarros');

    const carrosHTML = carros.map(carro => {
        const classificacao = (anoAtual - carro.anoFabricacao <= 2) ? 'semi-novo' : 'usado';
        return `
            <div class="carro ${classificacao}">
                <h2>${carro.modelo} (${carro.cor})</h2>
                <p>Ano de Fabricação: ${carro.anoFabricacao}</p>
                <p>Classificação: ${classificacao.charAt(0).toUpperCase() + classificacao.slice(1)}</p>
            </div>
        `;
    }).join('');

    divListaCarros.innerHTML = carrosHTML;
}

exibirCarros();
