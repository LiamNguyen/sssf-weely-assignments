const mongoose = require('mongoose');

exports.connect = () => {
  mongoose.connect(
    `mongodb://${process.env.DB_HOST}/The_Show`,
    { useMongoClient: true, promiseLibrary: global.Promise }
  );
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to mongodb');
  });
};
