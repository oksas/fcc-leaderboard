import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardList.scss";
import LeaderboardItem from "./LeaderboardItem";

var sample = {
    rank: 1,
    user: "quincylarson",
    picture: "some url",
    thirty: 40,
    alltime: 5000
};

class LeaderboardList extends React.Component {
  render () {
    return (
      <div>
        <LeaderboardItem data={sample} />
        <LeaderboardItem data={sample} />
        <LeaderboardItem data={sample} />
        <LeaderboardItem data={sample} />
        <LeaderboardItem data={sample} />
      </div>
    );
  }
}

export default CSSModules(LeaderboardList, styles);
