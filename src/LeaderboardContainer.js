import React from "react";
import Leaderboard from "./Leaderboard";
import axios from "axios";

class LeaderboardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    var url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    axios.get(url)
      .then(response => {
        this.setState({
          items: response.data
        });
      });
  }

  render () {
    var content = this.state.items.length > 1 ?
      <Leaderboard items={this.state.items}/> :
      <h1>Loading...</h1>;

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default LeaderboardContainer;
