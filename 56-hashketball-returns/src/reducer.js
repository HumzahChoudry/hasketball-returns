import gamesData from "./gamesData";

let defaultState = {
  teams: gamesData.teams,
  selectedPlayer: null
};
function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SELECT_PLAYER":
      console.log("inside select player in reducer");
      return { ...state, selectedPlayer: action.payload };
      break;
    case "DESELECT_PLAYER":
      return { ...state, selectedPlayer: null };
      break;
    default:
      return state;
  }
}

export default reducer;
