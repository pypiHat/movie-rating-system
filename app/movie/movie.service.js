const db = require('../../db')


const create = async (data) => {
    try {
        console.log(data)
        const result = await db.movie.create(data)
        return result.id
    } catch (err) {
        throw new Error(err.message)
    }
}

const getMovieList = async () => {
    try {
        const movies = await db.movie.findMany()
        return movies
    } catch (err) {
        throw new Error(err.message)
    }
}


const getGenresList = async () => {
    try {
        console.log('funccccccc')
        const genres = await db.prisma.enumValues.Genre;
        console.log(genres, 'heeeeey')
        return genres
    } catch (err) {
        throw new Error(err.message)
    }
}

module.exports = {
    create,
    getMovieList,
    getGenresList,

}