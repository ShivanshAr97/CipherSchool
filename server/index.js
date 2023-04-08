const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes")

const app = express();
const port = process.env.PORT || 5000;
const mongoUrl = "mongodb+srv://shivansharora973:ypNXuFKJ9Hy9NbL2@cluster0.6dztjzw.mongodb.net/?retryWrites=true&w=majority";
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

app.get("/th", async (req, res) => {
    res.send("kflbn");
})

const router = express.Router();

const authMiddleware = require("./middlewares/authMiddleware");

app.use("/api", userRoutes)

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
