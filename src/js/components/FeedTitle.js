import React from "react"

const FeedTitle = ({info}) => (
    <div class="feed-title">
        <img src={info.image} className="img-responsive" />
        <h1>{info.title}</h1>
    </div>
)

export default FeedTitle