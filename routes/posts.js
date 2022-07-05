const express = require("express");
const router = express.Router();
const postsControler = require('./../controllers/postControler')

router
  .route("/")
  .get(postsControler.getAllPosts)
  .post(postsControler.createPost);

  router
  .route('/:id')
  .get(postsControler.getOnePost)
  .patch(postsControler.updatePost)
  .delete(postsControler.deletePost)

  module.exports = router;