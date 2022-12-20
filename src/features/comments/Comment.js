import "./comment.css";
export const Comment = ({ author, body }) => {
    return (
        <div className="comment-container">
            <h4 className="comment-author">{author}</h4>
            <p className="comment-body">{body}</p>
        </div>
    )
}