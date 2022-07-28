import { combineReducers } from "redux";
import newsReducers from "./newsReducers";
import searchReducers from "./searchReducers";

const rootReducer = combineReducers({
    news: newsReducers,
    search: searchReducers,
});

export default rootReducer;