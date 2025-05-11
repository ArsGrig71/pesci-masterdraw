const mongoose = require('mongoose');
const entrySchema = new mongoose.Schema({
    name: String,
    email: String,
    answer: String,
    submittedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Entry', entrySchema);