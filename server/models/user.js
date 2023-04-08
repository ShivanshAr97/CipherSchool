const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    about: { type: String },
    profilePic: { 
      type: String,
      required:true,
      default:"https://t3.ftcdn.net/jpg/03/47/83/26/360_F_347832693_jCtFtvTuYuoQn7RUxqzFEvKi63SWfzYF.jpg"
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    links: {
      LinkedIn: { type: String },
      GitHub: { type: String },
      FaceBook: { type: String },
      Twitter: { type: String },
      Instagram: { type: String },
      Website: { type: String },
    },
    personalInfo: {
      Education: { type: String },
      College: { type: String }
    },
    interests: [{ type: String }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
