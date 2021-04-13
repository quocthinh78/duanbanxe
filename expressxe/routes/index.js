var express = require('express');
var router = express.Router();
var brandRouter = require('../routes/brand');
var category = require('../controllers/cat');
var infomation = require('../controllers/inf');
var item = require('../controllers/ite');
var product = require('../controllers/pro');
var catInfo = require('../controllers/catInfo')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.use("/brand", brandRouter);

//category
router.post("/category", category.createCat);
router.get("/category", category.showCat);

// item 
router.post("/item", item.createItem);
router.get("/item", item.showItem);

//product
router.post("/product", product.createProduct);
router.get("/product", product.showProduct);
router.get("/productJoin", product.join);

//info
router.post("/information", infomation.createInfo);
router.get("/information", infomation.showInfo);

// cat Info 
router.post("/catInfo", catInfo.createCatInfo);
module.exports = router;