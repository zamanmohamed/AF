const mongoose = require('mongoose');

const ConferenceSchema = new mongoose.Schema({
    title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
    speakers: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'speakers'}]

});

const Conference = mongoose.model('conferences', ConferenceSchema);
module.exports = Conference;