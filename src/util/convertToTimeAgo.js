export const convertToTimeAgo = (timePosted) => {
    const currentTime = Date.now();
    const timePostedMillis = timePosted * 1000;
    let timeAgo = currentTime - timePostedMillis;
    if (timeAgo < 60000) {
        timeAgo = Math.floor(timeAgo / 1000);
        return `${timeAgo} seconds ago`;
    } else if (timeAgo < 3600000) {
        timeAgo = Math.floor(timeAgo / 60000);
        return `${timeAgo} minutes ago`;
    } else if (timeAgo < 86400000) {
        timeAgo = Math.floor(timeAgo / 3600000);
        return `${timeAgo} hours ago`;
    } else if (timeAgo < 2592000000) {
        timeAgo = Math.floor(timeAgo / 86400000);
        return `${timeAgo} days ago`;
    }
    timeAgo = Math.floor(timeAgo / 2592000000);
    return `${timeAgo} months ago`;
};