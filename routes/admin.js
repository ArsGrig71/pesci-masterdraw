const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', (req, res) => {
    const { key } = req.query;
    if (key !== process.env.ADMIN_KEY) return res.status(403).send('Access Denied');
    adminController.getEntries(req, res);
});

module.exports = router;