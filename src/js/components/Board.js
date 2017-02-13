import React, {Component} from "react"
import { connect } from "react-redux"

import FeedTitle from "./FeedTitle"
import FeedItem from "./FeedItem"
import FeedList from "./FeedList"

import {fetchFeed} from "../actions/feedActions"

@connect((store) => {
  return {
    feed: store.feed
  };
})
export default class Board extends Component {
    constructor(props) {
        super(props);
        this.onSelectFeed = this.onSelectFeed.bind(this);
    }
    componentWillMount() {
        this.props.dispatch(fetchFeed( this.props.feed.feeds[0] ));
    }
    onSelectFeed(feed) {
        this.props.dispatch(fetchFeed( feed ));
    }
    render() {
        const feed = this.props.feed;
        return (<div class="">
            <div class="col-xs-2">
                <div class="row">
                <FeedList feeds={feed.feeds} selectedFeed={feed.selectedFeed} onSelectFeed={this.onSelectFeed} />
                </div>
            </div>
            <div className={`feed col-xs-10 clearfix`}>
                <div class="row">
                <FeedTitle info={feed.info} />
                <div class={`feed-list ${feed.fetching ? "loading" : ""}`}>
                    {feed.items.map(data => <FeedItem key={data.guid} data={data} />)}
                </div>
                </div>
            </div>
        </div>)
    }
}
