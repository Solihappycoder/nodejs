const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let currentValue = false;

app.use(bodyParser.json());

app.get('/api/boolean', (req, res) => {
    res.json({ value: currentValue });
});

app.put('/update/boolean', (req, res) => {
    if (typeof req.body.value === 'boolean') {
        let newValue = req.body.value;
        currentValue = newValue;
        res.json({value: currentValue});
    } else {
        res.status(400).json({ error: 'Invalid value. Must be a boolean.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
