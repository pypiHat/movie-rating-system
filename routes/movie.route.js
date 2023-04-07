const express = require('express');
const router = express.Router()


const { movieController } = require('../app/').movieApp


router.post('/create', movieController.create)
router.get('/movie', movieController.getMovieList)
router.get('/genres', movieController.getGenresList)
router.post('/rate', movieController.rateMovies)

module.exports = router;