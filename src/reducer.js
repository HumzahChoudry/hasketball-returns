import gamesData from './gamesData'

let defaultState = {
  teams: gamesData.teams,
  selectedPlayer: null
}

export function reducer(state=defaultState, action){
  console.log(action);
  switch (action.type) {
    case "SELECT_PLAYER":
      return {...state, selectedPlayer: action.payload }
      break;
    case "UNSELECT_PLAYER":
      return {...state, selectedPlayer: null}
    default: return state

  }
}
