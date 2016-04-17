import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardItem.scss";
import LeaderboardCell from "./LeaderboardCell";

class LeaderboardItem extends React.Component {
  render () {
    return (
      <div styleName="item">
        hello! I'm a list item HAH!!
        <LeaderboardCell/>
        <LeaderboardCell/>
        <LeaderboardCell/>
        <LeaderboardCell/>
      </div>
    );
  }
}

export default CSSModules(LeaderboardItem, styles);
