import React from 'react'
import {connect} from 'react-redux'
import {selectPlayer} from '../actions/index.js'

const Player = ({ player, selectPlayer, unselectPlayer }) => {
  return (
    <div>
      <div onClick={() => selectPlayer(player)}>
        <p>{player.name}</p>
      </div>
      <button onClick={unselectPlayer}>unselect </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPlayer: (player) => dispatch({type: "SELECT_PLAYER", payload: player}),
    unselectPlayer: () => dispatch({type: "UNSELECT_PLAYER"})
  }
}

export default connect(null, mapDispatchToProps)(Player)
