app.get('/items/count', (req, res) => {
    res.json({ count: items.length });
});

