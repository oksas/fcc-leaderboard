import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardList.scss";
import LeaderboardItem from "./LeaderboardItem";
import axios from "axios";

var sample = {
    rank: 1,
    user: "quincylarson",
    picture: "https://avatars.githubusercontent.com/u/11624587?v=3",
    thirty: 48,
    alltime: 5000
};

class LeaderboardList extends React.Component {
  // Set initial state to be fetched items
  // map over each fetched item, and make leaderboard item
  constructor() {
    super();
    this.state = {
      items: []
    };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    console.log("Component did mount; calling getItems");
    this.getItems();
  }

  getItems() {
    console.log("Making fake request for items");
    this.setState({
      items: [sample, sample, sample, sample]
    });
  }

  render () {
    return (
      <div>
        {this.state.items.map(item => (
          <LeaderboardItem data={item} />
        ))}
      </div>
    );
  }
}

export default CSSModules(LeaderboardList, styles);
