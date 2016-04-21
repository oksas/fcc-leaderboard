import React from "react";
import Leaderboard from "./Leaderboard";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";

class LeaderboardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: {
        recent: [],
        alltime: []
      },
      activeSort: "recent"
    };
    this.getItems = this.getItems.bind(this);
    this.setSort = this.setSort.bind(this);
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
          items: {
            recent: response.data,
            alltime: response.data.concat().sort(function(a, b) {
              return b.alltime - a.alltime;
            })
          }
        });
      });
  }

  setSort(filter) {
    if (filter !== this.state.activeSort) {
      this.setState({
        activeSort: filter
      });
    }
  }

  render () {
    var content = this.state.items.recent.length > 1 ?
      <Leaderboard
        items={this.state.items[this.state.activeSort]}
        setSort={this.setSort}
        activeSort={this.state.activeSort}/> :
      <LoadingSpinner/>;

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default LeaderboardContainer;
