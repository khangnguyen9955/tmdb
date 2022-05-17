const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        movies: [{
            type: Object,
            ref: "Movie",
        }],
    },
    {timestamps: true}
);

module.exports = mongoose.model("Watchlist", watchlistSchema);
