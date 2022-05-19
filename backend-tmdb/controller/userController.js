const Watchlist = require("../model/Watchlist");

const userController = {
    getWatchList: async (req, res) => {
        try {
            Watchlist.find({userId: req.user.id})
                .then((watchList) => {
                    res.status(200).json(watchList[0].movies);

                })

        } catch (err) {
            res.status(500).json(err);
        }
    },
    addWatchList: async (req, res) => {
        const userId = req.user.id;
        const movie = req.body.movie;
        try {
            Watchlist.findOne({userId})
                .then((findWatchlist) => {
                    if (findWatchlist) {
                        Watchlist.findOne({userId, "movies.id": movie.id})
                            .then((findMovie) => {
                                if (findMovie) {
                                    res.status(400).json({messgage: "Movie is in your watchlist already!"});
                                } else {
                                    // add the movie to the watchlist and then save it
                                    Watchlist.updateOne({
                                        userId,
                                        movies: {$not: {$elemMatch: {id: movie.id}}}
                                    }, {$push: {movies: movie}})
                                        .then(() => {
                                            res.status(200).json(movie);
                                        });
                                    // done
                                }
                            });

                    } else {
                        const newWatchlist = new Watchlist({
                            userId,
                            movies: [movie],
                        });
                        newWatchlist.save((err, data) => {
                            if (err) {
                                res.status(400).json({message: err});
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
            Watchlist.updateOne({
                userId: req.user.id,
            }, {$pull: {movies: {id: req.body.id}}})
                .then((findMovie) => {
                    res.status(200).json({message: "Removed"});
                });
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },

    getNewList: async (req, res) => {
        try {
            const userID = req.user.id;


        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    }


};
module.exports = userController;
