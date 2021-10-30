const msg = require("mongoose");
msg.connect("mongodb://127.0.0.1:27017/misiontic", (err, db)=>{
    if(err) throw err;
    console.log("success!! Database conected!")
})

module.exports = msg;
