export function selectFeed(id) {
  return function(dispatch) {
    return dispatch({type: "SELECT_FEED", payload:id});
  }
}

export function fetchFeed(feed) {
  return function(dispatch) {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed.url}`)
      .then(response => {
        var contentType = response.headers.get("content-type");
        if(response.ok && contentType && contentType.indexOf("application/json") !== -1) {
          return response.json();
        }
        else {throw new Error('Incorrect feed');}
      })
      .then(json => {
        if(json.status == "ok") {return dispatch({type: "FETCH_FEED_SUCCESS", payload: json});}
        else {throw new Error('Incorrect data');}
      })
      .catch(error => dispatch({type: "FETCH_FEED_FAILURE", payload: error}));
    return dispatch({type: "FETCH_FEED", payload: feed});
  }
}