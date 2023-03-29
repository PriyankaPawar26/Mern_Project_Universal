var express = require('express');
var router = express.Router();
var url = require('url')
var path = require('path')
var adminmodel = require("../models/adminmodel")

router.get('/', function(req, res, next){
    res.render('adminHome', {msg:''})
})

router.get('/manageusers', function (req, res, next) {
    adminmodel.fetchusers((result)=>{
        console.log(result)
        res.render('manageusers', { msg: '','userDetails':result });
    })
    
});
module.exports= router;