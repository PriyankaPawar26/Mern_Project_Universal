var db = require("./connection")

function adminmodel() {


    this.fetchusers = (callback)=>{
        db.collection('register').find({"role":"user"}).toArray()
        .then((result)=>{
            callback(result) 
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
}


module.exports = new adminmodel()