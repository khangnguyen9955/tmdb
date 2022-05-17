const mongoose = require('mongoose');


const listSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        id: {
            type: Number,
            required: true,
        },
        listName: String,
        listMovie: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie",
        },
        ],

    },
    {timestamps: true}
)

module.exports = mongoose.model("List", listSchema);