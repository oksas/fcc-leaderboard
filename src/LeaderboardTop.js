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
        <div styleName={this.props.activeSort === "recent" ?
            "active-sort" :
            "sort"}
          onClick={this.handleRecentClick}>
          <LeaderboardCell style="recent">30 Days</LeaderboardCell>
        </div>
        <div styleName={this.props.activeSort === "alltime" ?
            "active-sort" :
            "sort"}
          onClick={this.handleAlltimeClick}>
          <LeaderboardCell style="alltime">All-time</LeaderboardCell>
        </div>
      </div>
    );
  }
}

LeaderboardTop.propTypes = {
  setSort: React.PropTypes.func.isRequired,
  activeSort: React.PropTypes.string.isRequired
};

export default CSSModules(LeaderboardTop, styles);
