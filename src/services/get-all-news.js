export const getAllNews = async (page, keyword, category) => {

    if (keyword) {
        return await fetch(`http://localhost:3001/api?q=${keyword}&page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(response => response.json())
    } if (category) {
        return await fetch(`http://localhost:3001/api?category=${category}&page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(response => response.json())
    }
}