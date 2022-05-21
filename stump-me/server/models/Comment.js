const { Schema, model } = require('mongoose');
const moment = require('moment');

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: 'leave a comment!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;