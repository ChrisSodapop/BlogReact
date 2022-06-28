const data = require("./data.js");
const postController = {
  //   get all posts
  getAllPosts: (req, res) => {
    try {
      // send results
      res.status(200).json(data);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
};

module.exports = postController;
