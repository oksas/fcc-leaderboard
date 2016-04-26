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
        transitionAppear={true} transitionAppearTimeout={800}
        transitionEnterTimeout={800} transitionLeaveTimeout={300}>
        <div styleName="top">
          <h1 styleName="top-header">Free Code Camp Top 100</h1>
        </div>
        <div styleName="leaderboard">
          <div onClick={this.handleClick}>
            <LeaderboardTop setSort={this.props.setSort}
              activeSort={this.props.activeSort}/>
            <LeaderboardList items={this.props.items}/>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

Leaderboard.propTypes = {
  items: React.PropTypes.array.isRequired,
  setSort: React.PropTypes.func.isRequired,
  activeSort: React.PropTypes.string.isRequired
};

export default CSSModules(Leaderboard, styles);
