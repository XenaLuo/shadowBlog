let mongoose = require('mongoose')

const Schema = mongoose.Schema

const ClassifySchema = new Schema({
  name: String
}, {collection: 'classify'})
const Classify = mongoose.model('classify', ClassifySchema);
module.exports = Classify
