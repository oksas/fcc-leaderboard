import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardItem.scss";
import LeaderboardCell from "./LeaderboardCell";

class LeaderboardItem extends React.Component {
  render () {
    return (
      <div styleName="item">
      <LeaderboardCell style="rank">Rank</LeaderboardCell>
      <LeaderboardCell style="user">User</LeaderboardCell>
      <LeaderboardCell style="thirty">30 Days</LeaderboardCell>
      <LeaderboardCell style="alltime">All-time</LeaderboardCell>
      </div>
    );
  }
}

export default CSSModules(LeaderboardItem, styles);
