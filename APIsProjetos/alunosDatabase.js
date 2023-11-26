const express = require('express');
const app = express();
const db = require('./aDataBase');
const dbcontext = db.AlunosDatabase();

app.use(express.json());

app.get('/alunosDatabase', async (req, res) => {
  
    res.status(200).send(await dbcontext.list());
});


app.get('/alunosDatabase/:id', async (req, res) => {
    
    res.status(200).send(await dbcontext.get(req.params.id));
});

app.post('/alunosDatabase', async (req, res) => {
    await dbcontext.insert(req.body);
    res.status(200).send('aluno adicionado com sucesso');
});

app.put('/alunosDatabase/:id', async (req, res) => {
    await dbcontext.update(req.body, req.params.id);
    res.status(200).send('dados do aluno modificado com sucesso');
});

app.delete('/alunosDatabase/:id', async (req, res) => {
    await dbcontext.del(req.params.id);
    res.status(200).send('dados do aluno apagados com sucesso');
});

app.listen(3008, () => {
    console.log('iniciei o meu servidor')
});

