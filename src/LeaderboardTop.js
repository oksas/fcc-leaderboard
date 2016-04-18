import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardTop.scss";
import LeaderboardCell from "./LeaderboardCell";

class LeaderboardTop extends React.Component {
  render () {
    return (
      <div styleName="top">
        <LeaderboardCell style="rank">Rank</LeaderboardCell>
        <LeaderboardCell style="user">User</LeaderboardCell>
        <LeaderboardCell style="thirty">30 Days</LeaderboardCell>
        <LeaderboardCell style="alltime">All-time</LeaderboardCell>
      </div>
    );
  }
}

export default CSSModules(LeaderboardTop, styles);
