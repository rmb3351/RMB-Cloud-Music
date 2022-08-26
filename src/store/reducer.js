/* 结合各个页面里的reducers，统一导出给store/index.js */
import { combineReducers } from "redux";
import { reducer as findMusicReducer } from "views/find-music/store/reducer";
const combinedReducer = combineReducers({
  findMusic: findMusicReducer,
});

export default combinedReducer;
