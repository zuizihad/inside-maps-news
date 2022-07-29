import { searchConstants } from "../constants";

const initialState = {
    keyword: '',
}

const searchReducers = (state = initialState, action) => {
    switch (action.type) {
        case searchConstants.SEARCH_NEWS: {
            return {
                keyword: action.payload,
            }
        }
        case searchConstants.REMOVE_SEARCH_ITEM: {
            return {
                keyword: ''
            }
        }
        default:
            return state;
    }
}

export default searchReducers;