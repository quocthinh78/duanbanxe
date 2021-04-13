const { query } = require('express');
var catInfo = require('../models/catInfo');

class catInf {
    createCatInfo(req, res) {
        var fanName = req.body;
        console.log(fanName);
        var b = new catInfo(fanName);
        b.save((err, r) => {
            res.json(r);
        });
    }
    showCat() {

    }
}


module.exports = new catInf;