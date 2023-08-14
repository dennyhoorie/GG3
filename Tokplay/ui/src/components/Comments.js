import React from 'react'
import EditCommentModal from './EditCommentModal'

export const Comments = ({comments, deleteComment, commentEdited}) => {

    console.log('comment length:::', comments)
    if (comments.length === 0) return null

    const CommentRow = (comment,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{comment._id}</td>
                  <td>{comment.username}</td>
                  <td>{comment.comment}</td>
                  <td>
                    <div className="row">
                        <div className="col-md-6">
                        {comment.status}
                        </div>
                        <div className="col-md-3">
                            <EditCommentModal comment={comment} commentEdited={commentEdited}/>
                        </div>
                        <div className="col-md-3">
                          <button type="button" onClick={(e) => deleteComment(comment._id)} className="btn btn-danger right">Delete</button>
                        </div>
                    </div>
                  </td>
              </tr>
          )
    }

    const commentTable = comments.map((comment,index) => CommentRow(comment,index))

    return(
        <div className="container">
            <h2>Comments</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Comment Id</th>
                    <th>Username</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                    {commentTable}
                </tbody>
            </table>
        </div>
    )
}
