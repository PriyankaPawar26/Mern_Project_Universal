var mongoose = require('mongoose')
var url ="mongodb://localhost:27017/mern_7_pm_sessions1"
mongoose.connect(url)

var db = mongoose.connection
console.log("succesfully connected to mongodb database...")

module.exports=db

