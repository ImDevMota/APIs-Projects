const express = require('express');
const app = express();

app.use(express.json());

const users = [];

// Buscar todos os usuarios
app.get('/users', (req, res) => { // request e response
    console.log('entrou no users');
    console.log(req.query);
    res.status(200).send({users: users});
});

// Buscar um unico usuario
app.get('/users/:id', (req, res) => { // request e response
    console.log('user encontrado');
    const userId = req.params.id;
    res.status(200).send(users.find(x => x.id == userId));
});

// Salvar um usuario
app.post('/users', (req, res) => { 
    console.log(req.body);
    users.push(req.body);
    console.log('usuario salvo');
    res.status(200).send(req.body);
});

// Atualizar dado de um usuario
app.put('/users/:id/:outro', (req, res) => { 
    console.log(req.body);
    console.log(req.params.id, ",", req.params.outro);
    console.log('atualizacao do usuario salva');
    res.status(200).send(req.params.id);
});

// Deletar usuario através do id
app.delete('/users/:id/:outro', (req, res) => { 
    console.log(req.params.id, ',', req.params.outro);
    console.log('usuario deletado');
    res.status(200).send(req.params.id);
});

// Porta
app.listen(3000, () => {
    console.log('iniciei meu servidor');
});