export const ADD_SONGS_TO_ROCK_SECTION = "ADD_SONGS_TO_ROCK_SECTION";
export const ADD_SONGS_TO_POP_CULTURE_SECTION = "ADD_SONGS_TO_POP_CULTURE_SECTION";
export const ADD_SONGS_TO_HIP_HOP_SECTION = "ADD_SONGS_TO_HIP_HOP_SECTION";
export const ADD_SELECTED_IN_PLAYER = "ADD_SELECTED_IN_PLAYER";

export const addSongsToRockSectionAction = (songs) => {
  return { type: ADD_SONGS_TO_ROCK_SECTION, payload: songs };
};

export const addSongsToPopCultureSectionAction = (songs) => {
  return { type: ADD_SONGS_TO_POP_CULTURE_SECTION, payload: songs };
};

export const addSongsToHipHopSectionAction = (songs) => {
  return {
    type: ADD_SONGS_TO_HIP_HOP_SECTION,
    payload: songs,
  };
};

export const addSelectedInPlayerAction = (song) => {
  return {
    type: ADD_SELECTED_IN_PLAYER,
    payload: song,
  };
};

export const getSongsAction = (artistName, storeSection) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(storeSection(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
