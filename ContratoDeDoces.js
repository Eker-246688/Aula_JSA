const pessoa = {
    nome: "Ana Clara",
    email: "ana.clara@example.com",
    telefone: "(11) 99999-8888"
};

const servico = {
    nome: "Festa de Aniversário",
    descricao: "Organização completa de festas de aniversário, incluindo decoração, buffet e entretenimento.",
    preco: "R$ 1500,00"
};

function exibirContato() {
    const contatoDiv = document.getElementById('contato');
    contatoDiv.innerHTML = `
        <h1>Contrato de Serviço</h1>
        <h2>Informações do Cliente</h2>
        <p><strong>Nome:</strong> ${pessoa.nome}</p>
        <p><strong>Email:</strong> ${pessoa.email}</p>
        <p><strong>Telefone:</strong> ${pessoa.telefone}</p>
        <h2>Detalhes do Serviço</h2>
        <p><strong>Serviço:</strong> ${servico.nome}</p>
        <p><strong>Descrição:</strong> ${servico.descricao}</p>
        <p><strong>Preço:</strong> ${servico.preco}</p>
    `;
}

exibirContato();
