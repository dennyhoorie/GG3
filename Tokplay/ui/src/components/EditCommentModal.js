import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { editComment } from '../services/CommentService'

export default function EditCommentModal({comment, commentEdited}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      editComment(data).then(response => {
        commentEdited(response);
        setShow(false);
    });
    };

    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          Edit
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Comment Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="form-group col-md-3">
                  <label htmlFor="commentId">Id</label>
                  <input {...register("id")} type="text" className="form-control" defaultValue={comment.id} name="id" id="id" disabled />
                </div>

            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="username">Username</label>
                    <input {...register("username")} type="text" className="form-control" defaultValue={comment.username} name="username" id="username" placeholder="Create a Username" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="comment">Comment</label>
                    <input {...register("comment")} type="text" className="form-control" defaultValue={comment.comment} name="comment" id="comment" placeholder="Put Your Comment ..." />
                </div>
            </div>
            <div className="btncenter">
              <input type="submit" className="btn btn-danger" />
            </div>
            </form>
          </Modal.Body>

        </Modal>
      </>
    );
}
