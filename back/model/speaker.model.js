const mongoose = require('mongoose');

const SpeakerSchema = new mongoose.Schema({
    name: {type: String, required:true},
    position: {type: String, required:true},
    description: {type: String, required:true},
    charge: {type: Number, required:true},
    photo: {
        type: String
    },
    conferences: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'conferences'}]

});

const Speaker = mongoose.model('speakers', SpeakerSchema);
module.exports = Speaker;