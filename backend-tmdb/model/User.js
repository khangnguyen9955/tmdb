const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
	{
		firstName: String,
		lastName: String,
		username: {
			type: String,
			required: true,
			minlength: 6,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			minlength: 6,
			required: true,
		},
	},
	{timestamps: true}
);
module.exports = mongoose.model("User", userSchema);


