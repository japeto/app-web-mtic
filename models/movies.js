const mgs = require("mongoose");
const moviesSchema = new mgs.Schema({
    title:String,
    director_id:String,
    release_year:String,
    actors:[],
    votes:Number,
    enable:Number
});
mgs.model("Movies", moviesSchema);