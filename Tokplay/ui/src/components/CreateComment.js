import React from 'react'
import { useForm } from "react-hook-form";
import { createComment } from '../services/CommentService'

export default function CreateComment(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        createComment(data).then(response => {
            props.commentCreated();
            e.target.reset();
        });
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>Comments List</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mrgnbtm">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input {...register("username")} placeholder="Create a Comment" className="form-control" name="username" id="username" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Comment</label>
                            <input {...register("comment")} placeholder="Put your comment here ..." className="form-control" name="comment" id="comment" />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger mrgnbtm" />
                </form>
                </div>
            </div>
        </div>
    )
}
