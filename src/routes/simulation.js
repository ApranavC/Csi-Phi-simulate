const express = require('express');
const { execFile } = require('child_process');
const router = express.Router();
const path = require('path');

router.post('/projectile', (req, res) => {
    const { velocity, angle, mass } = req.body;

    // Path to the Python script
    const pythonScriptPath = path.join(__dirname, '../../python-scripts/projectile_motion.py');

    // Arguments to pass to the Python script
    const args = [velocity, angle, mass];

    // Execute the Python script
    execFile('python', [pythonScriptPath, ...args], (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${stderr}`);
            res.status(500).send('Server Error');
            return;
        }

        // Parse the Python script output
        const result = JSON.parse(stdout);
        res.json(result);
    });
});

// src/routes/simulation.js

router.post('/pendulum', (req, res) => {
    const { length, angle, mass } = req.body;
    const pythonScriptPath = path.join(__dirname, '../../python-scripts/pendulum_motion.py');
    const args = [length, angle, mass];

    execFile('python', [pythonScriptPath, ...args], (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${stderr}`);
            res.status(500).send('Server Error');
            return;
        }

        const result = JSON.parse(stdout);
        res.json(result);
    });
});



module.exports = router;
