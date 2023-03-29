var mongoose = require('mongoose')
var url ="mongodb+srv://priyankapawar25059:Tnr3iNX7G5o1hapD@cluster0.doj1dms.mongodb.net/Universal_project_db"
mongoose.connect(url)

var db = mongoose.connection
console.log("succesfully connected to mongodb database...")

module.exports=db

