const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.post('/post', (req,res) => {
    const movie = new Movie({
        tittle: req.body.tittle,
        year: req.body.year
    })

    try{
        const movieToSave = movie.save();
        res.status(200).json(movieToSave)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }

});

module.exprots = router;

//some code are truncated
//readall
//router.get('/getAll', async (req,res) => {
//    try{
//        const movies = await Movie.find();
//        res.json(movies)
//    }

//   catch(error){
//        res.status(500).json({message: error.message})
//    }
//});

//readone
// router.get('/get/:id', async(req,res) => {
//     try{
//         const movie = await Movie.findById(req,params.id);
//         res.json(movies)
//     }

//     catch(error){
//         res.status(500).json({message: error.message})
//     }

// });

//update
// router.patch('/update/:id', async(req,res) =>{
//     try{
//         const id = req.params.id;
//         const updateMovieData = req.body;
//         const = { new: true };

//         constresult = await Movie.findByIdAndUpdate(
//             id, updatedMovieData, options
//         )

//         res.send(result)
//     }

//     catch(error){
//         res.status(400).json({message: error.message})
//     }
// });

//delete
// router.patch('/delete/:id', async(req,res) =>{
//     try{
//         const id = req.params.id;
//         const deletedMovieData = await Movie.findByIdAndDeleter(id)
//         res.send('Movie with ${deletedMovieData.tittle} has been deleted ...')
//     }

//     catch(error){
//         res.status(400).json({message: error.message})
//     }
// });