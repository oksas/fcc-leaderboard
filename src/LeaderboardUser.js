import React from "react";
import LazyLoad from "react-lazy-load";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardUser.scss";

class LeaderboardUser extends React.Component {
  render () {
    return (
      <div>
        <a href={"https://freecodecamp.com/" + this.props.username}>
          <LazyLoad offsetVertical={0}>
            <img styleName="img" src={this.props.img} />
          </LazyLoad>
          <span styleName="username">
            {this.props.username}
          </span>
        </a>
      </div>
    );
  }
}

LeaderboardUser.propTypes = {
  username: React.PropTypes.string.isRequired,
  img: React.PropTypes.string.isRequired
};

export default CSSModules(LeaderboardUser, styles);
