const { query } = require('express');
var infomation = require('../models/infomation');

class inf {
    createInfo(req, res) {
        var fanName = req.body;
        console.log(fanName);
        var b = new infomation(fanName);
        b.save((err, r) => {
            res.json(r);
        });
    }
    showInfo(req, res) {
        infomation.find({}).exec((err, r) => {
            res.json(r);
        });
    }
}
// 221087019
//221052691

module.exports = new inf;