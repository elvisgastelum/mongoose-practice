const { Schema, model } = require('mongoose');

const porductSchema = new Schema({
    name: {
        type: String,
        default: 'no-name'
    },
    description: {
        type: String,
        default: 'no-description'
    },
    price: {
        type: Number,
        default: 0
    }
})

module.exports = model('Product', porductSchema);