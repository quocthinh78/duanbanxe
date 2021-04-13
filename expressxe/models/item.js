const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const item = Schema({
    name: String,
    categories: [{ type: Schema.Types.ObjectId, ref: 'category' }],
    informations: [{ type: Schema.Types.ObjectId, ref: 'infomation' }],
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    brand: { type: Schema.Types.ObjectId, ref: 'brand' },
});
module.exports = mongoose.model('item', item);