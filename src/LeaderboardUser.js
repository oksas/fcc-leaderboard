import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardUser.scss";

class LeaderboardUser extends React.Component {
  render () {
    return (
      <div>
        <img styleName="picture" src={this.props.picture} />
        <span styleName="user">{this.props.user}</span>
      </div>
    );
  }
}

LeaderboardUser.propTypes = {
  user: React.PropTypes.string.isRequired,
  picture: React.PropTypes.string.isRequired
};

export default CSSModules(LeaderboardUser, styles);
