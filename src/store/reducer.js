/* 结合各个页面里的reducers，统一导出给store/index.js */
import { combineReducers } from "redux";
import { reducer as recommendReducer } from "views/find-music/recommend-music/store/reducer";
const combinedReducer = combineReducers({
  recommend: recommendReducer,
});

export default combinedReducer;
