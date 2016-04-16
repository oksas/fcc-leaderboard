import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardTop.scss";

class LeaderboardTop extends React.Component {
  render () {
    return (
      <div styleName="top">
        hello!
      </div>
    );
  }
}

export default CSSModules(LeaderboardTop, styles);
