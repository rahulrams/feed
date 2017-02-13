import axios from "axios";

export function selectFeed(id) {
  return function(dispatch) {
    return dispatch({type: "SELECT_FEED", payload:id});
  }
}
export function fetchFeed(feed) {
  return function(dispatch) {
    var gurl = "https://api.rss2json.com/v1/api.json?rss_url="+feed.url;
    $.getJSON(gurl, function(data) {
      console.log("****************FEED*******************");
      console.log(data);
      console.log("****************FEED*******************");
      return dispatch({type: "FETCH_FEED_SUCCESS", payload: data});
    });
    return dispatch({type: "FETCH_FEED", payload: feed.id});
    /*axios.get("https://api.pinterest.com/v3/pidgets/boards/vicemag/magazine/pins/")
      .then(response => dispatch({type: "FETCH_FEED_SUCCESS", payload: response.data}) )
      .catch(err => dispatch({type: "FETCH_FEED_ERROR", payload: err}) )*/
  };
}