const express = require('express');
const cors = require('cors');
const livros = require('./data/livros.json');

const app = express();
app.use(cors());

app.get('/livros/:mood', (req, res) => {
    const mood = req.params.mood;

    const resultado = livros[mood];

    if (!resultado) {
        return res.status(404).json({ mensagem: "Nenhum livro encontrado" });
    }

    res.json(resultado);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
