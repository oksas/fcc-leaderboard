import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardUser.scss";

class LeaderboardUser extends React.Component {
  render () {
    return (
      <div>
        <img styleName="img" src={this.props.img} />
        <span styleName="username">{this.props.username}</span>
      </div>
    );
  }
}

LeaderboardUser.propTypes = {
  username: React.PropTypes.string.isRequired,
  img: React.PropTypes.string.isRequired
};

export default CSSModules(LeaderboardUser, styles);
