import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboard.scss";
import LeaderboardTop from "./LeaderboardTop";
import LeaderboardList from "./LeaderboardList";

class Leaderboard extends React.Component {
  render () {
    return (
      <div styleName="leaderboard">
        <div>
          <LeaderboardTop/>
          <LeaderboardList/>
        </div>
      </div>
    );
  }
}

export default CSSModules(Leaderboard, styles);
