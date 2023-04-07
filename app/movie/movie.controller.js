const movieService = require('./movie.service')


const create = async (req, res, next) => {
    try {
        const data = req.body
        const movieId = await movieService.create(data)
        return res.status(210).send({
            movieId,
          });
    } catch (err) {
        next(err)
    }
}

const getMovieList = async (req, res, next) => {
    try {
        const movies = await movieService.getMovieList()
        return res.status(210).send(movies);
    } catch (err) {
        next(err)
    }
}

const rateMovies = async (req, res, next) => {
    try {
        const {movie, rate} = req.body
        if (userService.CheckMovie) { 
            // check if user rated before
        }
        else{

        }
    } catch (err) {
        next(err)
    }
}

const getGenresList = async (req, res, next) => {
    try {
        const genres = await movieService.getGenresList()
        return res.status(210).send(genres);
    } catch (err) {
        next(err)   
    }
}

module.exports = {
    create,
    getMovieList,
    rateMovies,
    getGenresList
}