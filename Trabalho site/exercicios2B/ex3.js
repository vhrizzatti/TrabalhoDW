app.patch('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    const item = items.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ error: 'Item não encontrado.' });
    }

    if (name && (typeof name !== 'string' || name.length < 3)) {
        return res.status(400).json({ error: 'O campo name deve ser uma string com pelo menos 3 caracteres.' });
    }

    if (name) {
        item.name = name;
    }

    res.status(200).json(item);
});

