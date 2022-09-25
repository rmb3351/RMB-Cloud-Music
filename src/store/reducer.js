/* 结合各个页面里的reducers，统一导出给store/index.js */
// 使用redux-immutable里的combineReducers，将结合后的reducer也转成immutable对象
import { combineReducers } from "redux-immutable";
import { reducer as findMusicReducer } from "views/find-music/store/reducer";
import { reducer as playBarReducer } from "components/app-playbar/store/reducer";
const combinedReducer = combineReducers({
  findMusic: findMusicReducer,
  playBar: playBarReducer,
});

export default combinedReducer;
