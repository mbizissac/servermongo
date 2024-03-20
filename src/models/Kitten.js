const mongoose  = require('mongoose');
// kittySchema 
const kittySchema = new mongoose.Schema({
    name: String
  });

  const Kitten = mongoose.model('Kitten', kittySchema);

  module.exports = Kitten;
