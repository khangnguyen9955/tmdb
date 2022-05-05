const Movie = require("../model/Movie");

const userController = {
  getWatchList: async (req, res) => {
    try {
      const watchList = Movie.find({ userId: req.user.id });
      res.status(200).json({ watchList });
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  addWatchList: async (req, res) => {
    const userId = req.user.id;
    const movie = req.body.movie;
    try {
      const findMovie = Movie.findOne({ userId, id: movie.id });
      if (findMovie) {
        res.status(400).json({ message: "added" });
      } else {
        const newMovie = new Movie({
          userId,
          ...movie,
        });
        newMovie.save((err, data) => {
          if (err) {
            res.status(500).json({ message: err });
          } else {
            res.status(200).json(data);
          }
        });
      }
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  removeWatchList: async (req, res) => {
    try {
      const findMovie = Movie.findOneAndDelete({
        userId: req.user.id,
        id: req.body.id,
      });
      res.status(200).json(findMovie);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  addFavoriteList: async(req,res) =>{
    const userId = req.user.id;
    const movie = req.body.movie;
    try{
      const findMovie = Movie.findOne({userId,id:movie.id});
        if(findMovie){
          res.status(400).json({message:"added"});
        }else{
          const newMovie = new Movie({
            userId
            ,...movie,
                                     });
          newMovie.save((err,data) => {
            if(err){
              res.status(500).json({message:err});
            }else{
              res.status(200).json(data);
            }
          });
        }
    }
    catch (err){
      res.status(500).json(err);
      console.log(err);
    }
  },
  getFavoriteList: async (req, res) => {
    try {
      const favoriteList= Movie.find({ userId: req.user.id });
      res.status(200).json({ favoriteList});
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  removeFavoriteList: async (req, res) => {
    try {
      const findMovie = Movie.findOneAndDelete({
      userId: req.user.id,
      id: req.body.id,
                                               });
      res.status(200).json(findMovie);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },

};
module.exports = userController;
