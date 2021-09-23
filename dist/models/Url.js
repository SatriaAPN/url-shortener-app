const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    uuid: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    }
})

module.exports = mongoose.model('Url', urlSchema);