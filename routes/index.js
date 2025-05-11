const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/submit-entry', async (req, res) => {
    const { name, email, answer } = req.body;
    const entry = new Entry({ name, email, answer });
    await entry.save();
    res.send('Entry submitted successfully!');
});

module.exports = router;