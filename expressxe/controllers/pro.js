const { query } = require('express');
var product = require('../models/product');

class pro {
    createProduct(req, res) {
        var fanName = req.body;
        console.log(fanName);
        var b = new product(fanName);
        b.save((err, r) => {
            res.json(r);
        });
    }
    showProduct() {

    }

    join(req, res) {
        product.
        find().
        populate("categories").
        populate("brand").
        then((r) => {
                // res.json(r);
                return "a";
            })
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {

            })
    }
}

module.exports = new pro;