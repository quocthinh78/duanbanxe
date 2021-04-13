const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brand = Schema({
    name: String,
    year: Number,
    categories: [{ type: Schema.Types.ObjectId, ref: 'category' }],
    informations: [{ type: Schema.Types.ObjectId, ref: 'infomation' }],
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    items: [{ type: Schema.Types.ObjectId, ref: 'item' }],
});
module.exports = mongoose.model('brand', brand);