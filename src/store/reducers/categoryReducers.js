import { categoryConstants } from "../constants";

const initialState = {
    category: '',
}

const categoryReducers = (state = initialState, action) => {
    switch (action.type) {
        case categoryConstants.CATEGORY_NEWS: {
            return {
                category: action.payload,
            }
        }
        case categoryConstants.REMOVE_CATEGORY_ITEM: {
            return {
                category: ''
            }
        }
        default:
            return state;
    }
}

export default categoryReducers;