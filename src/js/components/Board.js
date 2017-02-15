import React, {Component} from "react"
import { connect } from "react-redux"

import FeedTitle from "./FeedTitle"
import FeedItemBasic from "./FeedItemBasic"
import FeedItemMin from "./FeedItemMin"
import FeedItemThumbnail from "./FeedItemThumbnail"

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

    getTemplate(template) {
        const components = {FeedItemBasic,FeedItemMin,FeedItemThumbnail};
        return components[template];
    }
    render() {
        const feed = this.props.feed;
        const FeedItem = this.getTemplate(feed.selectedFeed.template);
        return (<div class="flexbox">
            <div class="col bookmarks">
                <FeedList feeds={feed.feeds} selectedFeed={feed.selectedFeed.id} onSelectFeed={this.onSelectFeed} />
            </div>
            <div className={`feed col clearfix`}>
                {feed.info ? <FeedTitle info={feed.info} />: null}
                <div class={`feed-list ${feed.fetching ? "loading" : ""}`}>
                    {feed.items ? feed.items.map(data => <FeedItem template={data.template} key={data.guid} data={data} />): null}
                </div>
                {feed.error ? 
                    <div className="error-container">
                        <div className="error-content">
                            <h2>Feed not loading</h2>
                            <h4 className="error">{feed.error}</h4>
                        </div>
                    </div>
                :null}
            </div>
        </div>)
    }
}
