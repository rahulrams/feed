import React from "react";
import moment from "moment";

const FeedItem = ({data}) => (
    <div class="feed-item clearfix">
        {data.thumbnail ? <img src={data.thumbnail} /> : null}
        <div>
            <h3>{data.title}</h3>
            <p dangerouslySetInnerHTML={{__html: data.description}} />
            <a href={data.link} target="_blank">See the story</a>
            <p class="created-on">{moment(data.pubDate).fromNow()}</p>
        </div>
    </div>
)

export default FeedItem