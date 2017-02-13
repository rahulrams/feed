export default function reducer(state={
    fetching: false,
    fetched: false,
    info: "",
    items:[],
    error: null,
    feeds: [
      {id:1,name:"BBC", url:"http://feeds.bbci.co.uk/news/rss.xml"},
      {id:2,name:"Simply Recipes", url:"http://feeds.feedburner.com/elise/simplyrecipes"},
      {id:3,name:"Interesting things", url:"http://feeds.feedburner.com/InterestingThingOfTheDay"},
      {id:4,name:"io9", url:"http://feeds.gawker.com/io9/vip"}
    ],
    selectedFeed:1
  }, action) {
    switch (action.type) {
      case "FETCH_FEED": {
        return {...state, info: "", items: [], fetching:true, selectedFeed: action.payload, error: null}
      }
      case "FETCH_FEED_SUCCESS": {
        return {...state, info: action.payload.feed, items: action.payload.items, fetching:false, fetched: true}
      }
      case "FETCH_FEED_FAILURE": {
        return {...state, fetching:false, error: action.payload}
      }
    }
    return state
  }
