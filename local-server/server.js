const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from local server'
    });
});

app.get('/slow', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 100));

    res.json({
        message: 'Slow response'
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});