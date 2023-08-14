const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

console.log('environment    ', process.env.ENVIRONMENT)
console.log('PORT    ', process.env.PORT)
console.log('MONGO_CONNECTION_STRING    ', process.env.MONGO_CONNECTION_STRING)
if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}


const movieController = require('./controller/movie.controller')
const commentController = require('./controller/comment.controller')



const app = express();
const port = process.env.PORT || 3080;

app.use(express.static(path.join(__dirname, './ui/build')));
app.use(bodyParser.json());


//movies
app.get('/api/movies', (req, res) => {
    movieController.getMovies().then(data => res.json(data));
});

app.post('/api/movie', (req, res) => {
    console.log(req.body);
    movieController.createMovie(req.body.movie).then(data => res.json(data));
});

app.put('/api/movie', (req, res) => {
    movieController.updateMovie(req.body.movie).then(data => res.json(data));
});

app.delete('/api/movie/:id', (req, res) => {
    movieController.deleteMovie(req.params.id).then(data => res.json(data));
});

//comment
app.get('/api/comments', (req, res) => {
    commentController.getComments().then(data => res.json(data));
});

app.post('/api/comment', (req, res) => {
    console.log(req.body);
    commentController.createComment(req.body.comment).then(data => res.json(data));
});

app.put('/api/comment', (req, res) => {
    commentController.updateComment(req.body.comment).then(data => res.json(data));
});

app.delete('/api/comment/:id', (req, res) => {
    commentController.deleteComment(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
});


app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})