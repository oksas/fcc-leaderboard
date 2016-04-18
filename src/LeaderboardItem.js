import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardItem.scss";
import LeaderboardCell from "./LeaderboardCell";

class LeaderboardItem extends React.Component {
  render () {
    return (
      <div styleName="item">
        hello! I'm a list item HAH!!
        <LeaderboardCell style="rank"/>
        <LeaderboardCell style="user"/>
        <LeaderboardCell style="thirty"/>
        <LeaderboardCell style="alltime"/>
      </div>
    );
  }
}

export default CSSModules(LeaderboardItem, styles);
