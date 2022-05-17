const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        media_type: {
            type: String,
            required: true,

        },
        title: String,
        poster_path: String,
        release_date: Date,
        overview: String,
        vote_average: Number,
        popularity: Number,
    },
)
module.exports = mongoose.model("Movie", movieSchema)