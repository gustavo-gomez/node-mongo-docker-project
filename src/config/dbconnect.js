const mongoose = require('mongoose');
const { MONGO_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(console.log('DB CONNECTION SUCCESSFUL'))
    .catch((err) => {
      console.error('FAILED TO CONNECT TO DB');
      console.error(err);
    });
};
