const commentRepository  = require('../repository/comment.repository');

class CommentService {

    constructor() {}

    async getComments() {
        return await commentRepository.getComments();
    }

    async createComment(comment) {
        return await commentRepository.createComment(comment);
    }

    async updateComment(comment) {
        return await commentRepository.updateComment(comment);
    }

    async deleteComment(commentId) {
        return await commentRepository.deleteComment(commentId);
    }

}

module.exports = new CommentService();