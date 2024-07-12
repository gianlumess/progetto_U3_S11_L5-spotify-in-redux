import { ADD_SONGS_TO_ARRAY } from "../actions";

const initialState = {
  content: null,
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONGS_TO_ARRAY:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default songsReducer;
