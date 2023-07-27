constmongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    tittle: {
        required: true,
        type: String
    },

    year: {
        required: true,
        type: Number
    }
})