const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = "mysecretkey";
const saltRounds = 10;

const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, secretKey,{
            expiresIn:'30d'
        });

        return res.status(200).json({ "Welcome": email });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}


const loginUser = async (req, res) => {
    try {
        const { username, email, password, profilePic } = req.body;

        if (!username || !email || !password || !profilePic) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hash = await bcrypt.hash(password, saltRounds);

        const user = new User({ username, email, password: hash });

        await user.save();

        const token = jwt.sign({ userId: user._id }, secretKey);

        return res.status(201).json({ "token": token, "password": password });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = { registerUser, loginUser }