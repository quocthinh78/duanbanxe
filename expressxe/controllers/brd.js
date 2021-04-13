const { query } = require('express');
var brand = require('../models/brand');

class brd {
    createBrand(req, res) {
        var fanName = req.body;
        console.log(fanName);
        var b = new brand(fanName);
        b.save((err, r) => {
            res.json(r);
        });
    }
    showBrand(req, res) {
        brand.find({}).exec((err, r) => {
            res.json(r);
        });
    }
    getProduct(req, res) {
        brand.
        find().
        populate("products").
        exec(function(err, r) {
            if (err) return handleError(err);
            res.json(r);
        });
    }
}
module.exports = new brd;