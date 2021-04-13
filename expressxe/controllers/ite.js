const { query } = require('express');
var item = require('../models/item');

class int {
    createItem(req, res) {
        var fanName = req.body;
        console.log(fanName);
        var b = new item(fanName);
        b.save((err, r) => {
            res.json(r);
        });
    }
    showItem(req, res) {

    }
}

module.exports = new int;