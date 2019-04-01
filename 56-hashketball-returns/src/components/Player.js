import React from "react";
import { connect } from "react-redux";

const Player = props => {
  console.log(props.selectPlayer);
  return (
    <div onClick={() => props.selectPlayer(props.player)}>
      <p>{props.player.name}</p>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    selectPlayer: player => dispatch({ type: "SELECT_PLAYER", payload: player })
  };
};
export default connect(null, mapDispatchToProps)(Player);
