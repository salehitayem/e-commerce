const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];


router.get('/shop/porduct-list', (req, res, next) => {
    res.render('add-product',{
        docTitle: 'Add Product',
        path: 'product'
    });
});

router.post('/shop/porduct-list', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')

});


exports.routes = router;
exports.products = products;