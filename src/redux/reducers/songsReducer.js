import { ADD_SONGS_TO_HIP_HOP_SECTION, ADD_SONGS_TO_POP_CULTURE_SECTION, ADD_SONGS_TO_ROCK_SECTION } from "../actions";

const initialState = {
  rock: null,
  popCulture: null,
  hipHop: null,
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONGS_TO_ROCK_SECTION:
      return {
        ...state,
        rock: action.payload,
      };
    case ADD_SONGS_TO_POP_CULTURE_SECTION:
      return {
        ...state,
        popCulture: action.payload,
      };
    case ADD_SONGS_TO_HIP_HOP_SECTION:
      return {
        ...state,
        hipHop: action.payload,
      };
    default:
      return state;
  }
};

export default songsReducer;
