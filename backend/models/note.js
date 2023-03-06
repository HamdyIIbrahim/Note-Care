const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        requied:true,
        unique:true
    },
    content:{
        type:String,
        requied:true
    }
});
const noteModel =mongoose.model("Notes",noteSchema);
module.exports=noteModel;