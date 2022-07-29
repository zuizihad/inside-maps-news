import { newsConstants, searchConstants, categoryConstants } from "../constants";

export const searchNews = (keyword) => {
    return {
        type: searchConstants.SEARCH_NEWS,
        payload: keyword,
    }
}

export const removeSearchItem = () => {
    return {
        type: searchConstants.REMOVE_SEARCH_ITEM,
    }
}

export const newsCategory = (category) => {
    console.log(category);
    return {
        type: categoryConstants.CATEGORY_NEWS,
        payload: category,
    }
}
export const removeNewsCategory = () => {
    return {
        type: categoryConstants.REMOVE_CATEGORY_ITEM,
    }
}

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