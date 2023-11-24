const {addToLikedMovies, getLikedMovies, removeLikedMovies} = require('../controllers/UserControllers')

const router = require('express').Router();

 router.post("/add",addToLikedMovies)
 router.get("/liked/:email", getLikedMovies);
 router.put("/delete", removeLikedMovies);

 module.exports = router


