import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardList.scss";
import LeaderboardItem from "./LeaderboardItem";

class LeaderboardList extends React.Component {
  render () {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <LeaderboardItem data={Object.assign({}, item, {
            rank: index+1
          })} key={item.username} />
        ))}
      </div>
    );
  }
}

LeaderboardList.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default CSSModules(LeaderboardList, styles);
