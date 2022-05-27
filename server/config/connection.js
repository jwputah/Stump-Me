const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://stumpmegroup:BlackThunder22@cluster0.uarqm.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
