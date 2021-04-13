const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = Schema({
    name: String,
    brand: { type: Schema.Types.ObjectId, ref: 'brand' },
    informations: [{ type: Schema.Types.ObjectId, ref: 'infomation' }],
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    items: [{ type: Schema.Types.ObjectId, ref: 'item' }],
});
module.exports = mongoose.model('category', category);