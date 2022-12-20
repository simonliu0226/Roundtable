import { useSelector} from "react-redux";
import { selectSearchType } from "../../../slices/searchSlice";
import { selectPosts } from "../../../slices/redditPostsSlice";
import { selectSubreddits } from "../../../slices/subredditsSlice";


export const SearchResults = () => {
    const searchType = useSelector(selectSearchType);
    const posts = useSelector(selectPosts);
    const subreddits = useSelector(selectSubreddits);

    return (
        <p></p>
    )
}