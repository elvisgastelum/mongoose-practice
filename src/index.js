const moongose = require('mongoose');

const URI = 'mongodb://localhost:27017/mongoose-practice';
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

moongose.connect(URI, config);