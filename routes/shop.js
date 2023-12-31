const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('../controllers/product-list');

const router = express.Router();


router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        docTitle: 'Shop',
        path: 'shop'
        });
});


module.exports = router;