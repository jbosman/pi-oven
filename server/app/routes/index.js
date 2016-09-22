'use strict';
var router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;

router.use('/pies', require('./pies'))

// catch any calls to un-supplied routes
router.use(function (req, res) {
    res.status(404).end();
});