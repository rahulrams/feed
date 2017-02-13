import React from "react"

import Board from "./Board"

export default class Layout extends React.Component {
  render() {
    return (<div class="main-layout container">
      <header></header>
      <div class="row">
        <div class="col-xs-12"><Board /></div>
      </div>
    </div>)
  }
}
