import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  songs: songsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
