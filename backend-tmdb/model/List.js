const mongoose = require("mongoose");
const moment = require("moment");
const listSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    lists: [
      {
        listName: String,
        listMovie: [
          {
            type: Object,
            ref: "Movie",
          },
        ],
        createdAt: {
          type: String,
          default: () => moment().format("dddd, MMMM YYYY"),
        },
        updatedAt: {
          type: Date,
        },
      },
    ],
  },
  { timestamps: true }
);
listSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("List", listSchema);
