const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    email:{
        type:String,
        requied:true,
        unique:true
    },
    password:{
        type:String,
        requied:true
    },
    noteId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Notes"
    }
});
const noteModel =mongoose.model("Users",noteSchema);
module.exports=noteModel;