import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardCell.scss";

class LeaderboardCell extends React.Component {
  render () {
    return (
      <div styleName={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(LeaderboardCell, styles);
