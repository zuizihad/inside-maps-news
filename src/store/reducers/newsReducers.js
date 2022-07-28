import { newsConstants } from "../constants";

const initialState = {
    readLater: [],
}

const newsReducers = (state = initialState, action) => {
    switch (action.type) {
        case newsConstants.VIEW_FROM_READ_LATER: {
            return {
                ...state,
            }
        }
        case newsConstants.ADD_TO_READ_LATER: {
            const data = state.readLater.length === 0 ? action.payload :
                state.readLater.find(item => item.title !== action.payload.title);
            if (data) return {
                ...state,
                readLater: [...state.readLater, data],
            }
        }
            break;
        case newsConstants.REMOVE_FROM_READ_LATER: {
            return {
                ...state,
                readLater: state.readLater.filter(item => item.title !== action.payload.title),
            }
        }
        default:
            return state;
    }
}

export default newsReducers;