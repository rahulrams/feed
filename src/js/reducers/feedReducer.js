export default function reducer(state={
    fetching: false,
    fetched: false,
    info: null,
    items:[],
    error: null,
    feeds: [
      {id:1,name:"BBC", url:"http://feeds.bbci.co.uk/news/rss.xml",template:'FeedItemThumbnail'},
      {id:2,name:"Simply Recipes", url:"http://feeds.feedburner.com/elise/simplyrecipes",template:'FeedItemBasic'},
      {id:3,name:"Interesting things", url:"http://feeds.feedburner.com/InterestingThingOfTheDay",template:'FeedItemMin'},
      {id:4,name:"io9", url:"http://feeds.gawker.com/io9/vip",template:'FeedItemBasic'},
      {id:5,name:"Rueters Art",url:"http://feeds.reuters.com/news/artsculture",template:'FeedItemBasic'},
      {id:6,name:"Test",url:"http://feeds.reuters.com/news/1",template:'FeedItemBasic'}
    ],
    selectedFeed:{id:1,name:"BBC", url:"http://feeds.bbci.co.uk/news/rss.xml",template:'FeedItemThumbnail'}
  }, action) {
    switch (action.type) {
      case "FETCH_FEED": {
        return {...state, info: null, items: [], fetching:true, selectedFeed: action.payload, error: null}
      }
      case "FETCH_FEED_SUCCESS": {
        return {...state, info: action.payload.feed, items: action.payload.items, fetching:false, fetched: true}
      }
      case "FETCH_FEED_FAILURE": {
        return {...state, fetching:false, error: action.payload.message}
      }
    }
    return state
  }
