// Lista de livros emprestados
const livrosEmprestados = [
    { titulo: "Livro Armado", autor: "Autor Mario Gomes", ano: 2001 },
    { titulo: "Livro Beijo cego", autor: "Autor Bia Rios", ano: 2002 },
    { titulo: "Livro Casa escura", autor: "Autor Carla Franco", ano: 2003 },
    { titulo: "Livro Dia lindo", autor: "Autor Dara Cristo", ano: 2004 },
    { titulo: "Livro Escola do amor", autor: "Autor Elisa Albuquerque", ano: 2005 },
    { titulo: "Livro Filha única", autor: "Autor Flavia Mattos", ano: 2006 },
    { titulo: "Livro Garoto mágico", autor: "Autor Geraldo Canto", ano: 2007 },
    { titulo: "Livro Hoje e amanhã", autor: "Autor Heloiza Pacheco", ano: 2008 },
    { titulo: "Livro Igreja única", autor: "Autor Italo Mello", ano: 2009 },
    { titulo: "Livro Jogos mortais", autor: "Autor João Antunes", ano: 2010 }
];

function exibirRecibos() {
    const divRecibos = document.getElementById('recibos');
    const totalLivros = livrosEmprestados.length;

    const recibosHTML = livrosEmprestados.map(livro => `
        <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #ccc;">
            <h2>${livro.titulo}</h2>
            <p>Autor: ${livro.autor}</p>
            <p>Ano de Publicação: ${livro.ano}</p>
        </div>
    `).join('');

    const mensagemTotal = `<h3>Total de Livros Emprestados: ${totalLivros}</h3>`;

    divRecibos.innerHTML = mensagemTotal + recibosHTML;
}

document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
document.body.style.marginTop = '20px';

exibirRecibos();
