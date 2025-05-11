const Entry = require('../models/Entry');

exports.getEntries = async (req, res) => {
    try {
        const entries = await Entry.find().sort({ submittedAt: -1 });
        res.render('admin', { entries });
    } catch (err) {
        res.status(500).send('Error fetching entries');
    }
};