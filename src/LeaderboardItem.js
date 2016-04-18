import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardItem.scss";
import LeaderboardCell from "./LeaderboardCell";
import LeaderboardUser from "./LeaderboardUser";

class LeaderboardItem extends React.Component {
  render () {
    return (
      <div styleName="item">
        <LeaderboardCell style="rank">{this.props.data.rank}</LeaderboardCell>
        <LeaderboardCell style="user">
          <LeaderboardUser user={this.props.data.user} picture={this.props.data.picture}/>
        </LeaderboardCell>
        <LeaderboardCell style="thirty">{this.props.data.thirty}</LeaderboardCell>
        <LeaderboardCell style="alltime">{this.props.data.alltime}</LeaderboardCell>
      </div>
    );
  }
}

LeaderboardItem.propTypes = {
  data: React.PropTypes.shape({
    rank: React.PropTypes.number.isRequired,
    user: React.PropTypes.string.isRequired,
    picture: React.PropTypes.string.isRequired,
    thirty: React.PropTypes.number.isRequired,
    alltime: React.PropTypes.number.isRequired
  }).isRequired
};

export default CSSModules(LeaderboardItem, styles);
