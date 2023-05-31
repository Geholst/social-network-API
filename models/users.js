const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    
    userName: { type: String, unique: true, required: true, trimmed: true },
    email: {
        type:String,
        unique:true,
        required:true,
    },
    thoughts: [{
        type:Schema.Types.ObjectId,
        ref:'Thought'
    }],
    friends: [{
        type:Schema.Types.ObjectId,
        ref:'User',
    }],
});
const Users = model('User',userSchema);


module.exports = Users;