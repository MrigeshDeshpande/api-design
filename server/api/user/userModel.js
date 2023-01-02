var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema=new Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    posts:[{
        type:Schema.Types.ObjectId,
        ref:'post'
    }]
    //denormalizing in sql terms -- two ways to access the same data
    //we can ask users about their posts and post about their users (NOT_RECOMMENDED)
});

module.export=mongoose.model('user',userSchema)