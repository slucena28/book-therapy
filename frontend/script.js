async function buscarLivros() {
    const mood = document.getElementById("mood").value;
    const resultadoDiv = document.getElementById("resultado");

    if (!mood) {
        resultadoDiv.innerHTML = "Selecione um humor!";
        return;
    }

    try {
        const resposta = await fetch(`http://localhost:3000/livros/${mood}`);
        const dados = await resposta.json();

        resultadoDiv.innerHTML = "";

        dados.forEach(livro => {
            resultadoDiv.innerHTML += `
                <div>
                    <h3>${livro.titulo}</h3>
                    <p>${livro.descricao}</p>
                </div>
            `;
        });

    } catch (erro) {
        resultadoDiv.innerHTML = "Erro ao buscar livros.";
    }
}
