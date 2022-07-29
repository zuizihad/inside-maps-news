export const getAllNews = async (page, keyword, category) => {
    if (keyword) {
        return await fetch(`https://newsapi.org/v2/everything?q=${keyword}&pageSize=20&page=${page}&apiKey=bb733ce962d64deaab61ef9a13771507`)
            .then(response => response.json())
    } else {
        return await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&pageSize=20&page=${page}&apiKey=bb733ce962d64deaab61ef9a13771507`)
            .then(response => response.json())
    }
}