const { query } = require('express');
var category = require('../models/category');

class cat {
    createCat(req, res) {
        var fanName = req.body;
        console.log(fanName);
        var b = new category(fanName);
        b.save((err, r) => {
            res.json(r);
        });
    }
    showCat() {

    }
}


module.exports = new cat;