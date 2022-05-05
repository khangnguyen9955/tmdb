const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    id: {
      type: Number,
      required: true,
    },
    media_type: {
      type: String,
      default: "movie",
    },
    title: String,
    poster_path: String,
    release_date: Date,
    overview: String,
    vote_average: Number,
    popularity: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
