import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardTop.scss";
import LeaderboardCell from "./LeaderboardCell";

class LeaderboardTop extends React.Component {
  constructor() {
    super();
    this.handleRecentClick = this.handleRecentClick.bind(this);
    this.handleAlltimeClick = this.handleAlltimeClick.bind(this);
  }

  handleRecentClick() {
    this.props.setSort("recent");
  }

  handleAlltimeClick() {
    this.props.setSort("alltime");
  }


  render () {
    return (
      <div styleName="top">
        <LeaderboardCell style="rank">Rank</LeaderboardCell>
        <LeaderboardCell style="user">User</LeaderboardCell>
        <span onClick={this.handleRecentClick}>
          <LeaderboardCell style="recent">30 Days</LeaderboardCell>
        </span>
        <span onClick={this.handleAlltimeClick}>
          <LeaderboardCell style="alltime">All-time</LeaderboardCell>
        </span>
      </div>
    );
  }
}

LeaderboardTop.propTypes = {
  setSort: React.PropTypes.func.isRequired
};

export default CSSModules(LeaderboardTop, styles);
