const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({ 
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: 'user'
  }
    });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;