const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const conferenceSchema = new Schema({
  title: { type: String, required: true },
  speaker: { type: String, required: true },
  date: { type: String, required: true },
  discription: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model("Conference", conferenceSchema);
