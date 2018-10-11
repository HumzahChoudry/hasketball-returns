import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'

const PlayerDetails = ({ selectedPlayer, unSelectPlayer }) => {
  return (
    <Card
      className='player-details'>
      <Image src='http://www.burkenc.org/assets/PublishingImages/Parks%20and%20Rec/Basketball.png'/>
      <Card.Header>
        {selectedPlayer.name}
      </Card.Header>
      <Card.Content className="detail-text" onClick={unSelectPlayer}>
        <Card.Meta>Number: {selectedPlayer.number}</Card.Meta>
        <Card.Meta>Shoe: {selectedPlayer.shoe}</Card.Meta>
        <Card.Meta>Points: {selectedPlayer.points}</Card.Meta>
        <Card.Meta>Rebounds: {selectedPlayer.rebounds}</Card.Meta>
        <Card.Meta>Assists: {selectedPlayer.assists}</Card.Meta>
        <Card.Meta>Steals: {selectedPlayer.steals}</Card.Meta>
        <Card.Meta>Blocks: {selectedPlayer.blocks}</Card.Meta>
        <Card.Meta>Slam Dunks: {selectedPlayer.slamDunks}</Card.Meta>
      </Card.Content>
    </Card>
  )
}

function mapDispatchToProps(dispatch){
  return {
    unSelectPlayer: () => dispatch({type: "UNSELECT_PLAYER"}),
    
  }
}

export default connect(null, mapDispatchToProps)(PlayerDetails)

{/* <div>
  <img src={selectedPlayer.image_url}></img>
  <p>{selectedPlayer.name}</p>

</div> */}
