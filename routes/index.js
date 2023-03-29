var express = require('express');
var router = express.Router();
var indexmodel = require('../models/indexmodel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/register', function (req, res, next) {
  res.render('register', { msg: '' });
});

router.post('/register', function (req, res, next) {
  // console.log(req.body)
  indexmodel.registeruser(req.body, (result) => {
    console.log("Result :", result)
    if (result) {
      res.render('register', { msg: 'User Register Successfully...' });
    } else {
      res.render('register', { msg: 'User already exists Please Register again...' });
    }

  })
});

router.get('/login', function(req, res, next) {
  res.render('login', { msg:'' });
});

router.post('/login', function (req, res, next) {
  console.log(req.body)
  indexmodel.userlogin(req.body, (result) => {
    console.log(result)
    if (result.length>0) {
       if (result[0].role=="user") {
        // res.send("login as a user")
        res.redirect("/users")
       }

       else {
        // res.send("login as an admin")
        res.redirect("/admin")
       }
    
    
    } else {
      res.render('login', { msg: 'Invalid user or verify your account' })
    }
  })
  // res.render('login', { msg: 'form submitted..' });
});


router.get('/contact',function(req,res,next){
  res.render('contact', { title: 'Express' })
});



module.exports = router;
