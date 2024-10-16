app.delete('/items', (req, res) => {
    items = [];
    res.json({ message: 'Todos os itens foram removidos.' });
});

