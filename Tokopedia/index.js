//connect to mongo db
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//- connect to mongo db -start
const mongoose = require('mongoose');
const mongooseString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;


//if database not connect
database.on('error', (error) => {
    console.log(error)
})

//if database connect
database.once('connected', () => {
    console.log('Your is Database Connected');
})

//- connect to mongo db -end

const app = express();
const port = 3000;
const routes = require('./server/routes/video.route')

//middleware
app.use(cors());
app.use(express.json());

// import routes
const videoRoute = require('./server/routes/video.route');
const productRoute = require('./server/routes/product.route');
const commentRoute = require('./server/routes/comment.route');

// Apply routes
app.use('/videos', videoRoute);
app.use('/products', productRoute);
app.use('/comments', commentRoute);

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.get('/', (req,res) =>{
    res.set('Custom-Header', 'this is a custom header')
    res.send('list of user')
})


app.use('/api', routes)

app.listen(3000, () =>{
    console.log('Server Started at ${3000)')
})