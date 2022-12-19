import { useState } from "react";
import upArrowFilled from "../../assets/UpArrowFilled.png";
import upArrowOutline from "../../assets/UpArrowOutline.png";
import downArrowFilled from "../../assets/DownArrowFilled.png";
import downArrowOutline from "../../assets/DownArrowOutline.png";
import comments from "../../assets/comments.png";
import { abbreviateNum } from "../../util/abbreviateNum";
import { convertToTimeAgo } from "../../util/convertToTimeAgo";
import "./post.css";

export const Post = ({ header, author, score, num_comments, created_epoch, is_video, mediaURL, embedHTML, redditVideoURL, selftext }) => {
    const [voteValue, setVoteValue] = useState(0);
    const votes = abbreviateNum(score);
    const numComments = abbreviateNum(num_comments);
    const timeAgo = convertToTimeAgo(created_epoch);

    const renderUpVote = () => {
        if (voteValue === 1) {
            return (
            <button className="vote-arrow-btn" onClick={upArrowHandler}>
                <img src={upArrowFilled} alt="Red Up Arrow" className="arrow-img" />
            </button>
            )
        }
        return (
        <button className="vote-arrow-btn" onClick={upArrowHandler}>
            <img src={upArrowOutline} alt="Up Arrow Outline" className="arrow-img" />
        </button>
        )
    }

    const renderDownVote = () => {
        if (voteValue === -1) {
            return (
                <button className="vote-arrow-btn" onClick={downArrowHandler}>
                    <img src={downArrowFilled} alt="Red Up Arrow" className="arrow-img" />
                </button>
            )
        }
        return (
            <button className="vote-arrow-btn" onClick={downArrowHandler}>
                <img src={downArrowOutline} alt="Red Up Arrow" className="arrow-img" />
            </button>
        )
    }

    const renderMedia = () => {
        if (is_video && embedHTML !== "") {
            const videoSource = embedHTML.match(/src=([^&]*)/)[1].slice(1);
            return (
                <div className="video-container">
                    <a href={mediaURL} className="video-link" target="_blank">{mediaURL}</a>
                    {videoSource.includes("youtube") ? <iframe src={videoSource} className="youtube-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media" allowFullScreen title={header} /> : <></>}
                    
                </div>
            )
        } else if (redditVideoURL !== "") {
            return <a href={redditVideoURL} className="Reddit-Video" target="_blank">Link to reddit video</a>;
        } else if (mediaURL != "") {
            return (
                <img className="media-img media" src={mediaURL} />
            )
        }
    }

    const upArrowHandler = () => {
        if (voteValue === 1) {
            setVoteValue(0);
        } else if (voteValue === 0) {
            setVoteValue(1);
        }
    }

    const downArrowHandler = () => {
        if (voteValue === -1) {
            setVoteValue(0);
        } else if (voteValue === 0) {
            setVoteValue(-1);
        }
    }



    return (
        <div className="post-container">
            <div className="votes-container">
                {renderUpVote()}
                <p className="votes-count">
                    {votes}
                </p>
                {renderDownVote()}
            </div>
            <div className="media-info-container">
                <div className="media-container">
                    <h3 className="media-heading">
                        {header}
                    </h3>
                    <p className="post-text">{selftext.replaceAll("&amp;#x200B;", "\n")}</p>
                    {renderMedia()}
                </div>
                <div className="post-info-container">
                    <p className="post-author info-element">Posted by: u/{author}</p>
                    <p className="posted-time info-element">{timeAgo}</p>
                    <button className="comments-button info-element" onClick={() => {alert('Comments');}}>
                        <img className="comments-icon" src={comments} alt="Comments" />
                        <p className="num-post-comments">{numComments} Comments</p>
                    </button>
                </div>
            </div>
        </div>
    )
}