const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
  id: { type: 'String', required: true },
  content: { type: 'String' },
  status: { type: 'String' }
});

module.exports = mongoose.model('Item', Item);