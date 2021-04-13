var express = require('express');
var router = express.Router();

var brand = require('../controllers/brd');

// brand
router.post("/", brand.createBrand);
router.get("/", brand.showBrand);
router.get("/joinProduct", brand.getProduct);
module.exports = router;