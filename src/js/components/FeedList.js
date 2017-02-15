import React from "react";
import moment from "moment";

const FeedList = ({feeds, selectedFeed, onSelectFeed}) => (
    <div class="feed-links clearfix">
        {feeds.map(feed => 
            <a href="#" 
            key={feed.id} 
            className={`${feed.id == selectedFeed ? 'selected' : ''}`} 
            onClick={() => onSelectFeed(feed)} >{feed.name}
            </a>
        )}
    </div>
)

export default FeedList