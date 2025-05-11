const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/submit-entry', async (req, res) => {
    const { name, email, answer } = req.body;
    try {
        const entry = new Entry({ name, email, answer });
        await entry.save();
        res.redirect('/thank-you');
    } catch (err) {
        console.error("Error saving entry:", err);
        res.status(500).send("An error occurred.");
    }
});

router.get('/thank-you', (req, res) => {
    res.render('thank-you');
});

module.exports = router;
