const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

router.get('/', async (req, res) => {
    const adminKey = req.query.key;
    const expectedKey = process.env.ADMIN_KEY;

    if (adminKey !== expectedKey) {
        return res.status(403).send('Access Denied: Invalid Admin Key');
    }

    try {
        const entries = await Entry.find().sort({ submittedAt: -1 });
        res.render('admin', { entries });
    } catch (err) {
        console.error("Error fetching entries:", err);
        res.status(500).send("Error fetching entries");
    }
});

module.exports = router;
