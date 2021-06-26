const mongoose = require('mongoose');

const SpeackerSchema = new mongoose.Schema({
    name: {type: String, required:true},
    position: {type: String, required:true},
    description: {type: String, required:true},
    charge: {type: Number, required:true}
});

const Speaker = mongoose.model('speakers', SpeackerSchema);
module.exports = Speaker;