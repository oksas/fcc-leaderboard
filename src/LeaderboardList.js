import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles/leaderboardList.scss";
import LeaderboardItem from "./LeaderboardItem";
import axios from "axios";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

var sample = {
    rank: 1,
    user: "quincylarson",
    picture: "https://avatars.githubusercontent.com/u/11624587?v=3",
    recent: 48,
    alltime: 5000
};

class LeaderboardList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    var url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    axios.get(url)
      .then(response => {
        console.log(response);
        this.setState({
          items: response.data
        });
      });
  }

  render () {
    // If no items, just display a loading thing... so that there's at least a lil bit of white
    var content = this.state.items.length > 1 ?
      this.state.items.map((item, index) => (
        <LeaderboardItem data={Object.assign({}, item, {
          rank: index+1
        })} key={item.username} />
      ))
      : <h1 styleName="loading">Loading...</h1>;

    return (
      <div styleName="list">
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {content}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default CSSModules(LeaderboardList, styles);
