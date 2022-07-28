import { newsConstants } from "../constants";

export const getAllNews = () => {
    return {
        type: newsConstants.VIEW_FROM_READ_LATER
    }
}

export const addReadLater = (form) => {
    return {
        type: newsConstants.ADD_TO_READ_LATER,
        payload: form
    }
}

export const removeReadLater = (form) => {
    return {
        type: newsConstants.REMOVE_FROM_READ_LATER,
        payload: form
    }
}