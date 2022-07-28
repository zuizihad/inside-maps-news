import { combineReducers } from "redux";
import newsReducers from "./newsReducers";

const rootReducer = combineReducers({
    news: newsReducers,
});

export default rootReducer;