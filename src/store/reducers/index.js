import { combineReducers } from "redux";
import categoryReducers from "./categoryReducers";
import newsReducers from "./newsReducers";
import searchReducers from "./searchReducers";

const rootReducer = combineReducers({
    news: newsReducers,
    search: searchReducers,
    category: categoryReducers
});

export default rootReducer;