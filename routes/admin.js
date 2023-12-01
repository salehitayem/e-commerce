const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => get
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
// /admin/add-product => post
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')

});


exports.routes = router;
exports.products = products;