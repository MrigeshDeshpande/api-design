var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var categorySchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
       // ref:'post'
    }
})

module.export=mongoose.model('category',categorySchema)