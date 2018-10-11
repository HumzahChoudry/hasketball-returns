export function selectPlayer(player){
  return {
    type: "SELECT_PLAYER",
    payload: player
  }
}

export function unSelectPlayer(){
  return {
    type: "UNSELECT_PLAYER",
    payload: null
  }
}
