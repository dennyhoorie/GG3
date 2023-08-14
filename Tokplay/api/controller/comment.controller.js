const movieService  = require('../service/comment.service');
const logger = require('../logger/api.logger');

class CommentController {

    async getComments() {
        logger.info('Controller: getComments')
        return await commentService.getComments();
    }

    async createComment(comment) {
        logger.info('Controller: createComment', comment);
        return await commentService.createComment(comment);
    }

    async updateComment(comment) {
        logger.info('Controller: updateComment', comment);
        return await commentService.updateComment(comment);
    }

    async deleteComment(commentId) {
        logger.info('Controller: deleteComment', commentId);
        return await commentService.deleteComment(commentId);
    }
}
module.exports = new CommentController();
