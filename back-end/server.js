const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const filePath = path.join( 'data', 'items.json');

// GET route to fetch the JSON data
app.get('/api/get-json', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading file' });
        }

        res.json(JSON.parse(data));
    });
});

// POST route to update the JSON file
app.post('/api/update-json', (req, res) => {
    fs.writeFile(filePath, JSON.stringify(req.body, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error writing file' });
        }

        res.json({ message: 'File updated successfully' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
