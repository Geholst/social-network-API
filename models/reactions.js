const { Schema, Types } = require("mongoose");
const dayJs = require('dayjs');
const { ObjectId } = require('mongodb');

// create user model
const reactionSchema = new Schema({

  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1
  },
  userName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: dayJs().format()
  },
});


module.exports = reactionSchema;