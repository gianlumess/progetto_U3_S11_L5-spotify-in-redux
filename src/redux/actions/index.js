export const ADD_SONGS_TO_ARRAY = "ADD_SONGS_TO_ARRAY";

export const addSongsToArrayAction = (songs) => {
  return { type: ADD_SONGS_TO_ARRAY, payload: songs };
};

export const getSongsAction = (artistName) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(addSongsToArrayAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
