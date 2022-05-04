'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    let name = req.query.name;
    let id = req.query.id;
      
    name = Array.from(
          String(name || '')
        ).reverse().join('')
    console.log(name);
    console.log(id);
    res.render('layout', { title :name, id: id });
});
router.post('/', function (req, res) {
    let name = req.body.name;
    let id = req.body.id;
    
    res.send('respond with a resource');
});

router.put('/put', function (req, res) {
    res.send('respond with a resource');
});

router.patch('/patch', function (req, res) {
    res.send('respond with a resource');
});


module.exports = router;
