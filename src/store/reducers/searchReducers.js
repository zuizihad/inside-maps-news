import { searchConstants } from "../constants";

const initialState = {
    keyword: 'bitcoin',
}

const searchReducers = (state = initialState, action) => {
    switch (action.type) {
        case searchConstants.SEARCH_NEWS: {
            return {
                keyword: action.payload,
            }
        }
        default:
            return state;
    }
}

export default searchReducers;