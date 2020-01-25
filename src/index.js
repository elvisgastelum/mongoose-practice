const moongose = require('mongoose');
const db = moongose.connection;

const URI = 'mongodb://localhost:27017/mongoose-practice';
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

moongose.connect(URI, config);

db.once('open', _ => {
    console.log(`database is connected to ${URI}`)
})