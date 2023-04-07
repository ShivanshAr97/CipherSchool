const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = "mongodb+srv://shivansharora973:ypNXuFKJ9Hy9NbL2@cluster0.6dztjzw.mongodb.net/?retryWrites=true&w=majority";
const saltRounds = 10;
const secretKey = "mysecretkey";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(mongoUrl, options);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("MongoDB connected successfully");
});
const User = require("./models/user");

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
    res.send("kflbn");
})

const router = express.Router();

const authMiddleware = require("./middlewares/authMiddleware");

app.post("/api/login", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
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
});


app.post("/api/register", async (req, res) => {
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

        const token = jwt.sign({ userId: user._id }, secretKey);

        // return res.status(200).json({ token });
        return res.status(200).json({ "Welcome": email });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

// app.put("/api/profile", authMiddleware, async (req, res) => {
//     try {
//         const { username, email, interests } = req.body;

//         if (!username || !email) {
//             return res.status(400).json({ message: "Missing required fields" });
//         }

//         const user = await User.findById(req.userId);

//         user.username = username;
//         user.email = email;
//         user.interests = interests;

//         await user.save();

//         return res.status(200).json({ message: "Profile updated successfully" });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

app.put("/api/updateProfile", authMiddleware, async (req, res) => {
    try {
        const { username, about, links, personalInfo, interests } = req.body;

        if (!username) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const user = await User.findById(req.userId);

        user.username = username;
        user.about = about;
        user.personalInfo = personalInfo;
        user.links = links;
        user.interests = interests;

        await user.save();

        return res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.put("/api/password", authMiddleware, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const user = await User.findById(req.userId);

        const match = await bcrypt.compare(currentPassword, user.password);

        if (!match) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const hash = await bcrypt.hash(newPassword, saltRounds);

        user.password = hash;

        await user.save();

        return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
