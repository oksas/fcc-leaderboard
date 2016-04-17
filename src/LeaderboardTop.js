import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardTop.scss";
import LeaderboardTopCell from "./LeaderboardTopCell";

class LeaderboardTop extends React.Component {
  render () {
    return (
      <div styleName="top">
        <LeaderboardTopCell>Rank</LeaderboardTopCell>
        <LeaderboardTopCell>User</LeaderboardTopCell>
        <LeaderboardTopCell>30 Days</LeaderboardTopCell>
        <LeaderboardTopCell>All-time</LeaderboardTopCell>
      </div>
    );
  }
}

export default CSSModules(LeaderboardTop, styles);
