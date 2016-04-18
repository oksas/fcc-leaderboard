import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardItem.scss";
import LeaderboardCell from "./LeaderboardCell";

// Should receive props in form of an object that contains all 4 pieces of data
// Plus a url to that user's profile image
// Props.children for the user cell should be composed of another component?
class LeaderboardItem extends React.Component {
  // Define what components are received
  render () {
    return (
      <div styleName="item">
        <LeaderboardCell style="rank">{this.props.data.rank}</LeaderboardCell>
        <LeaderboardCell style="user">{this.props.data.username}</LeaderboardCell>
        <LeaderboardCell style="thirty">{this.props.data.thirty}</LeaderboardCell>
        <LeaderboardCell style="alltime">{this.props.data.alltime}</LeaderboardCell>
      </div>
    );
  }
}

LeaderboardItem.propTypes = {
  data: React.PropTypes.shape({
    rank: React.PropTypes.number.isRequired,
    username: React.PropTypes.string.isRequired,
    picture: React.PropTypes.string.isRequired,
    thirty: React.PropTypes.number.isRequired,
    alltime: React.PropTypes.number.isRequired
  }).isRequired
};

export default CSSModules(LeaderboardItem, styles);
