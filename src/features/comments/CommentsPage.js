import { useSelector } from "react-redux";
import { selectComments } from "../../slices/commentsSlice";
import { Comment } from "./Comment";
import { selectPostData } from "../../slices/commentsSlice";
import { Post } from "../post/Post";
import { ScrollToTopOnMount } from "../../util/scrollToTop";
import { useHistory } from "react-router-dom";
import "./commentsPage.css";

export const CommentsPage = () => {
    const comments = useSelector(selectComments);
    const postData = useSelector(selectPostData);
    const history = useHistory();

    const handleBackButton = () => {
        history.goBack();
    }

    if (postData.header) {
        return (
            <div className="comments-page">
                <button className="back-button" onClick={handleBackButton} >Go back</button>
                <ScrollToTopOnMount />
                <Post className="comments-post" header={postData.header} author={postData.author} score={postData.score} num_comments={postData.num_comments} created_epoch={postData.created_epoch} is_video={postData.is_video} mediaURL={postData.mediaURL} embedHTML={postData.embedHTML} redditVideoURL={postData.redditVideoURL} selftext={postData.selftext} permalink={postData.permalink} />
                <h3 className="comments-title">Comments:</h3>
                {comments.map((comment) => <Comment className="comment" author={comment.author} body={comment.body} />)}
            </div>
        )
    }
    history.push("/");
    return <></>;
}