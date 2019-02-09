const moongoose = require("mongoose");

const TweetSchema = new moongoose.Schema({
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = moongoose.model("Tweet", TweetSchema);
