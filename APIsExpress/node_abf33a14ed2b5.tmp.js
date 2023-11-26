const express = require('express');
const app = express();

app.use(express.json());

app.get('/alunos', (entrada, saida) => { 
    console.log(entrada.query)
    console.log('entrou no alunos')
    saida.status(200).send('deu certo!');
});

app.listen(3002, () => {
    console.log('iniciei meu servidor')
});