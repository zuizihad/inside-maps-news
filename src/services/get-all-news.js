export const getAllNews = async (page) => {
    return await fetch(`https://newsapi.org/v2/everything?q=bitcoin&pageSize=20&page=${page}&apiKey=9dd828fea16248fc9b4266996b1df444`)
        .then(response => response.json())
}