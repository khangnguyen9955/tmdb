const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const {cookie} = require("express/lib/response");
let refreshTokens = [];
const authController = {
	//generate access token
	generateAccessToken: (user) => {
		return jwt.sign(
			{
				id: user.id,
			},
			process.env.JWT_ACCESS_KEY,
			{expiresIn: "10s"}
		);
	},
	//generate  refresh token
	generateRefreshToken: (user) => {
		console.log("userID", user.id);
		return jwt.sign(
			{
				id: user.id,
			},
			process.env.JWT_ACCESS_KEY,
			{expiresIn: "1d"}
		);
	},
	// register
	registerUser: async (req, res) => {
		try {
			const regiseredUser = await User.findOne({username: req.body.username})
			if (regiseredUser) {
				return res.status(400).json("Your username has already been taken");
			}

			// hash password
			const salt = await bcrypt.genSalt(10);
			const hashed = await bcrypt.hash(req.body.password, salt);
			// create user
			const newUser = new User({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				username: req.body.username,
				password: hashed,
			});
			// save to db
			const user = await newUser.save()
			                          .then((user) => {
				                          const accessToken = authController.generateAccessToken(user);
				                          res.status(200).json({user, accessToken});
			                          });
		}
		catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	},
	//login
	loginUser: async (req, res) => {
		try {
			const user = await User.findOne({username: req.body.username});
			if (!user) {
				return res.status(404).json("Wrong username");
			}
			const validPassword = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (!validPassword) {
				return res.status(404).json("Wrong password");
			}
			if (user && validPassword) {
				const accessToken = authController.generateAccessToken(user);
				const refreshToken = authController.generateRefreshToken(user);
				refreshTokens.push(refreshToken);
				res.cookie("refreshToken", refreshToken, {
					httpOnly: true,
					secure: false,
					path: "/",
					sameSite: "strict",
				});
				const {password, ...others} = user._doc;
				res.status(200).json({...others, accessToken});
			}
		}
		catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	},
	// log out
	logoutUser: async (req, res) => {
		res.clearCookie("refreshToken");
		refreshTokens = refreshTokens.filter((token) => token !== req.cookies.refreshToken);
		return res.status(200).json("Log out");
	},
	requestRefreshToken: async (req, res) => {
		const refreshToken = req.cookies.refreshToken;
		if (!refreshToken) return res.status(401).json("You are not authenticated");
		if (!refreshTokens.includes(refreshToken)) {
			return res.status(403).json("Refresh token is not valid");
		}
		jwt.verify(refreshToken, process.env.JWT_ACCESS_KEY, (err, user) => {
			if (err) {
				console.log(err);
			}
			refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
			const newAccessToken = authController.generateAccessToken(user);
			const newRefreshToken = authController.generateRefreshToken(user);
			refreshTokens.push(newRefreshToken);
			res.cookie("refreshToken", newRefreshToken, {
				httpOnly: true,
				secure: false,
				path: "/",
				sameSite: "strict",
			});
			return res.status(200).json({accessToken: newRefreshToken});
		});
	},
};

module.exports = authController;
