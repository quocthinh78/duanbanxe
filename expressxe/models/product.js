const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = Schema({
    name: String,
    title: String,
    description: String,
    price: Number,
    quatity: Number,
    status: String,
    color: String,
    cubic: Number,
    state: String,
    image: String,
    year: Number,
    categories: [{ type: Schema.Types.ObjectId, ref: 'category' }],
    informations: [{ type: Schema.Types.ObjectId, ref: 'infomation' }],
    brand: [{ type: Schema.Types.ObjectId, ref: 'brand' }],
    items: [{ type: Schema.Types.ObjectId, ref: 'item' }],
    createdDate: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('product', product);