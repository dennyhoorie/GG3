import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header'
import { Comments } from './Comments'
import CreateComment from './CreateComment'
import { getAllComments, deleteComment, fetchSettings } from '../services/CommentService'

function Home() {
  //comment
  const [comments, setComments] = useState([])
  const [numberOfComments, setNumberOfComments] = useState([])
  const [isCommentEdited, setCommentEdited] = useState(false)

  useEffect(() => {
    getAllComments().then(comments => {
        console.log(comments)
        setComments(comments)
      });
  }, [numberOfComments, isCommentEdited])


  function delComment(commentId) {
      deleteComment(commentId).then(response => {
        console.log(response)
        setNumberOfComments(numberOfComment - 1)
      });
  }

  function commentCreated() {
    setNumberOfComments(numberOfComment + 1)
  }

  function commentEdited(res) {
     setCommentEdited(res)
  }

  return (
    <div className="App">
      <Header></Header>
     <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
              <CreateComment commentCreated={commentCreated}></CreateComment>
          </div>
        </div>
      </div>
      
      <div className="container mrgnbtm">
        <Comments comments={comments} deleteComment={delComment} commentEdited={commentEdited}></Comments>
     </div>
  </div>
  );
}

export default Home;
