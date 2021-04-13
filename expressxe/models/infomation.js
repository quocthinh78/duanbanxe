const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infomation = Schema({
    title: String,
    smallDes: String,
    description: String,
    status: String,
    image: String,
    categories: [{ type: Schema.Types.ObjectId, ref: 'category' }],
    brand: { type: Schema.Types.ObjectId, ref: 'brand' },
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    items: [{ type: Schema.Types.ObjectId, ref: 'item' }],
    createdDate: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('infomation', infomation);