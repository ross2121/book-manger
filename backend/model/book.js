const mongoose=require("mongoose");
const userschema=new mongoose.Schema({
    title:{
        type:String,
        require:[true,"please enter the book name"],
        minlength:5,
        maxlength:50,
    },
    author:{
        type:String,
        require:[true,"please enter the author"],
        minlength:5,
        maxlength:50
    },
    genre:{
        type:String,
        require:[true,"please enter the genre"],
        minlength:5,
        maxlength:50
    },
    year:{
        type:Date,
        require:[true,"please enter the date"],
    }


})
module.exports=mongoose.model("User",userschema)