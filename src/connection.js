const moongose = require('mongoose');
const db = moongose.connection;

const dbName = 'mongoose-practice';
const PORT = '27017';
const HOST = 'localhost';
const URI = `mongodb://${HOST}:${PORT}/${dbName}`;
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

moongose.connect(URI, config);

db.on('error', err => console.log(err));
db.once('open', _ => console.log(`Database is connected to ${dbName} in ${HOST} on port: ${PORT}`));