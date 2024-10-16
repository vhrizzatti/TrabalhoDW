const express = require('express');
const app = express();
app.use(express.json());

let items = [];

app.post('/items', (req, res) => {
    const { name } = req.body;

    if (!name || typeof name !== 'string' || name.length < 3) {
        return res.status(400).json({ error: 'O campo name deve ser uma string com pelo menos 3 caracteres.' });
    }

    const newItem = { id: items.length + 1, name };
    items.push(newItem);
    res.status(201).json(newItem);
});

