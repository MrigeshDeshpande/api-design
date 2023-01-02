var mongoose=require('mongoose')
var Schema= mongoose.Schema;
var postSchema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    text:{
        type:String,
        required:true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:'user',
        required:true
    },//one to many relationship with authors , meaning user can have many post,but a post can only have one user
    
    categories:[{
        type: Schema.Types.ObjectId,
        ref: 'category'
    }]
});
module.export=mongoose.model('post',postSchema)

//BEST to put reference on the MANY side as user is the ONE side as of ONE to MANY relation