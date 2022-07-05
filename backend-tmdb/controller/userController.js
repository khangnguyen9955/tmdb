const Watchlist = require("../model/Watchlist");
const List = require("../model/List");
const mongoose = require("mongoose");
const userController = {
  getWatchList: async (req, res) => {
    try {
      Watchlist.find({ userId: req.user.id }).then((watchList) => {
        if (watchList[0]) {
          res.status(200).json(watchList[0].movies);
        } else {
          res.status(200).json([]);
        }
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  addWatchList: async (req, res) => {
    const userId = req.user.id;
    const movie = req.body.movie;
    try {
      Watchlist.findOne({ userId }).then((findWatchlist) => {
        if (findWatchlist) {
          Watchlist.findOne({ userId, "movies.id": movie.id }).then(
            (findMovie) => {
              if (findMovie) {
                res
                  .status(400)
                  .json({ messgage: "Movie is in your watchlist already!" });
              } else {
                // add the movie to the watchlist and then save it
                Watchlist.updateOne(
                  {
                    userId,
                    movies: { $not: { $elemMatch: { id: movie.id } } },
                  },
                  { $push: { movies: movie } }
                ).then(() => {
                  res.status(200).json(movie);
                });
              }
            }
          );
        } else {
          const newWatchlist = new Watchlist({
            userId,
            movies: [movie],
          });
          newWatchlist.save((err, data) => {
            if (err) {
              res.status(400).json({ message: err });
            } else {
              res.status(200).json(data);
            }
          });
        }
      });
      //         userId,
      //         {$addToSet: {movies: movie}},
      //         function (err, data) {
      //             if (err) {
      //                 res.status(500).json({message: err});
      //             } else {
      //                 res.status(200).json(data);
      //             }
      //         })
      // )

      // if (findMovie) {
      //     res.status(400).json({message: "added"});
      // } else {
      //     Watchlist.findOneAndUpdate(
      //         userId,
      //         {$addToSet: {movies: movie}},
      //         function (err, data) {
      //             if (err) {
      //                 res.status(500).json({message: err});
      //             } else {
      //                 res.status(200).json(data);
      //             }
      //         });
      // }
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  removeWatchList: async (req, res) => {
    try {
      Watchlist.updateOne(
        {
          userId: req.user.id,
        },
        { $pull: { movies: { id: req.body.id } } }
      ).then((findMovie) => {
        res.status(200).json({
          message: "Removed",
          id: req.body.id,
        });
      });
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },

  createNewList: async (req, res) => {
    const userId = req.user.id;
    const list = req.body.list;
    try {
      List.findOne({
        userId,
      }).then((findList) => {
        if (findList) {
          List.findOneAndUpdate(
            { userId },
            {
              $push: {
                lists: list,
              },
            }
          ).then(() => {
            res.status(200).json(list);
          });
        } else {
          const newList = new List({
            userId,
            lists: [list],
          });
          newList.save((err, data) => {
            if (err) {
              res.status(400).json({ message: err });
            } else {
              res.status(200).json(data.lists[0]);
            }
          });
        }
      });
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  getAllList: async (req, res) => {
    try {
      List.find({ userId: req.user.id }).then((list) => {
        if (list[0]) {
          res.status(200).json(list[0].lists);
        } else {
          res.status(200).json([]);
        }
      });
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  removeList: async (req, res) => {
    try {
      List.updateOne(
        { userId: req.user.id },
        {
          $pull: {
            lists: {
              _id: req.body.id,
            },
          },
        }
      ).then(() => {
        res.status(200).json({
          message: "Removed",
          id: req.body.id,
        });
      });
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },

  addMovieToList: async (req, res) => {
    const userId = req.user.id;
    const listId = req.body.listId;
    const movie = req.body.movie;
    try {
      List.findOne({
        userId,
      }).then((findList) => {
        const ObjectId = mongoose.Types.ObjectId;
        const id = new ObjectId(listId);
        const findListMovie = findList.lists.filter((list) =>
          list._id.equals(id)
        );
        const listMovie = findListMovie[0].listMovie;
        let isAdded = false;
        listMovie.map((item) => {
          if (item.id === movie.id) {
            isAdded = true;
          }
        });
        if (isAdded) {
          res
            .status(200)
            .json({ message: "This movie has been added in list" });
        } else {
          listMovie.push(movie);
          findList.save();
          res.status(200).json({
            message: "Added to your list",
            movie: movie,
            listId: findListMovie[0]._id,
          });
        }
      });
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
};
module.exports = userController;
