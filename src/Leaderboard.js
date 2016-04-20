import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboard.scss";
import LeaderboardTop from "./LeaderboardTop";
import LeaderboardList from "./LeaderboardList";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Leaderboard extends React.Component {
  render () {
    return (
      <ReactCSSTransitionGroup transitionName="board"
        transitionAppear={true} transitionAppearTimeout={500}
        transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      <div styleName="leaderboard">
        <div>
          <LeaderboardTop/>
          <LeaderboardList items={this.props.items}/>
        </div>
      </div>
      </ReactCSSTransitionGroup>
    );
  }
}

Leaderboard.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default CSSModules(Leaderboard, styles);
