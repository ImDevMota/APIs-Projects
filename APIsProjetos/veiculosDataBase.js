const express = require('express');
const app = express();
const db = require('./vDataBase');
const dbcontext = db.veiculosDatabase();

app.use(express.json());

app.get('/veiculos', async (req, res) => {
    res.status(200).send(await dbcontext.list())
});

app.get('/veiculos/:id', async (req, res) => {
    res.status(200).send(await dbcontext.get(req.params.id))
});

app.post('/veiculos', async (req, res) => {
    await dbcontext.insert(req.body)
    res.status(200).send('dados do veículo cadastrado')
});

app.put('/veiculos/:id', async (req, res) => {
    await dbcontext.update(req.body, req.params.id)
    res.status(200).send(req.body)
});

app.delete('/veiculos/:id', async (req, res) => {
    await dbcontext.del(req.params.id)
    res.status(200).send('dados do veículo deletado')
});

app.listen(3010, () => {
    console.log('iniciei meu servidor')
});