const { Schema, model } = require('mongoose');
const dayJs = require('dayjs');
const reactionSchema = require('./reactions')
const thoughtSchema = new Schema({
    thoughtText: {
        type:String,
        required:true,
        maxlength:280,
        minlength:1,
                },
    createdAt: {
        type:Date,
        default:dayJs().format(),
                },
    userName: {
        type:String,
        required:true,
                },
    reactions: [reactionSchema]
});

const Thoughts = model('Thought', thoughtSchema);
module.exports = Thoughts;