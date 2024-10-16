app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const item = items.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ error: 'Item não encontrado.' });
    }

    res.status(200).json(item);
});

