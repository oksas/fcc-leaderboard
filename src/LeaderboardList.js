import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardList.scss";
import LeaderboardItem from "./LeaderboardItem";

class LeaderboardList extends React.Component {
  render () {
    return (
      <div>
        hello! I'm a list!
        <LeaderboardItem/>
      </div>
    );
  }
}

export default CSSModules(LeaderboardList, styles);
