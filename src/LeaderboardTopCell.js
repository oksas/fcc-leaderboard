import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardCell.scss";

class LeaderboardTopCell extends React.Component {
  render () {
    return (
      <div styleName="top-cell">
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(LeaderboardTopCell, styles);
