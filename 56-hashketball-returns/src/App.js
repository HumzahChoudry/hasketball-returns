import React, { Component } from "react";
import "./App.css";
import gamesData from "./gamesData";
import TeamList from "./components/TeamList";
import PlayerDetails from "./components/PlayerDetails";
import NavHeader from "./components/Header";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";

class App extends Component {
  // state = {
  //   teams: gamesData.teams,
  //   selectedPlayer: null
  // };

  // handleSelectPlayer = player => {
  //   this.setState({
  //     selectedPlayer: player
  //   });
  // };

  render() {
    return (
      <div className="App">
        <NavHeader />
        <TeamList />
        {!this.props.selectedPlayer ? (
          <div> Click Player for Details </div>
        ) : (
          <PlayerDetails selectedPlayer={this.props.selectedPlayer} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams,
    selectedPlayer: state.selectedPlayer
  };
};

export default connect(mapStateToProps)(App);
