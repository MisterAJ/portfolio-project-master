const express = require('express');
const router = express.Router();
const Books = require("../models/index").Book;
const Loans = require("../models/index").Loan;
const Patrons = require("../models/index").Patron;

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('home', {title: 'Express'});
});

module.exports = router;
