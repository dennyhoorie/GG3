const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({ username: 'string',
    comment: 'string'},
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

const Comment = mongoose.model('comments', commentSchema);

module.exports = {
    Comment
}
