import React from "react";
import moment from "moment";

const FeedItemMin = ({data}) => (
    <div class="feed-item clearfix">
        <div>
            <h3>{data.title}</h3>
            <a href={data.link} target="_blank">See the story</a>
            <p class="created-on">{moment(data.pubDate).fromNow()}</p>
        </div>
    </div>
)

export default FeedItemMin