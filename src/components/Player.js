import React from 'react'
import {connect} from 'react-redux'
import {selectPlayer} from './actions.js'

const Player = ({ player, selectPlayer, sayHumzah }) => {
  return (
    <div onClick={() => selectPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return {
    selectPlayer: (player) => dispatch(selectPlayer(player))
  }
}

//when you dispatch, you are sending an action to the reducer!!!
export default connect(null, mapDispatchToProps)(Player)
