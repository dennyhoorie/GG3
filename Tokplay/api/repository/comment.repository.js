const { connect, disconnect } = require('../config/db.config');
const { Comment } = require('../model/comment.model');
const logger = require('../logger/api.logger');

class CommentRepository {

    constructor() {
        connect();
    }

    async getComments() {
        const comments = await Comment.find({});
        console.log('comments:::', comments);
        return comments;
    }

    async createComment(comment) {
        let data = {};
        try {
            data = await Comment.create(comment);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateComment(comment) {
        let data = {};
        try {
            data = await Comment.updateOne(comment);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteComment(commentId) {
        let data = {};
        try {
            data = await Comment.deleteOne({_id : commentId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new CommentRepository();