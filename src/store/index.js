/* 定义store，关联reducer和middleWare并导出 */
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

// composeEnhancers是一个合并函数，用于把多个enhancer合并，方便作为createStore的第二个参数传入。{ trace: true }是开启devtools的trace功能，如果不需要开启，则和compose一样传入函数即可，不用调用
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
export const store = createStore(
  reducer,
  // 合并现有的和applyMiddleware返回的StoreEnhancer
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
