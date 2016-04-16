import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboard.scss";
import LeaderboardTop from "./LeaderboardTop";

class Leaderboard extends React.Component {
  render () {
    return (
      <div styleName="leaderboard">
        <div>
          <LeaderboardTop/>
          <div>B0</div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Leaderboard, styles);
