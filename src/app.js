// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const simulationRoutes = require('./routes/simulation');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Simulation Routes
app.use('/simulate', simulationRoutes);

// Home Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
