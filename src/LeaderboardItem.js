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
          <LeaderboardUser username={this.props.data.username} img={this.props.data.img}/>
        </LeaderboardCell>
        <LeaderboardCell style="recent">{this.props.data.recent}</LeaderboardCell>
        <LeaderboardCell style="alltime">{this.props.data.alltime}</LeaderboardCell>
      </div>
    );
  }
}

LeaderboardItem.propTypes = {
  data: React.PropTypes.shape({
    rank: React.PropTypes.number.isRequired,
    username: React.PropTypes.string.isRequired,
    img: React.PropTypes.string.isRequired,
    recent: React.PropTypes.number.isRequired,
    alltime: React.PropTypes.number.isRequired
  }).isRequired
};

export default CSSModules(LeaderboardItem, styles);
