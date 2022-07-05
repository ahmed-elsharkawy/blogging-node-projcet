const Post = require('./../models/postModel');

// // Get all posts
exports.getAllPosts = (req, res) => {
    Post.find({}).exec((err, data) => {
        if(!err) return res.status(200).json({
            status: 'success',
            data: data
        })
        res.status(404).json({
            status: 'fail',
            data: err
        })
    })
}

// Create one post
exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save((err, data) => {
        if(!err) return res.status(200).json({
            status: 'seccess',
            data
        }) 
        req.status(404).json({
            status: 'fail',
            data: err
        })
    })
}

// Get one Post
exports.getOnePost = (req, res) => {
    const id = req.params.id;
    Post.findById(id).exec((err, data) => {
        if(!err) return res.status(200).json({
            status: 'success',
            data
        })
        res.status(404).json({
            status: 'fail',
            data: err
        })
    })
}

// Update One Post
exports.updatePost = (req, res) => {
    // const id = req.params.id;
    Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
        runValidators: true, 
     }).exec((err, data) => {
        if(!err) return res.status(200).json({
            status: 'success',
            data
        })
        res.status(404).json({
            status: 'fail',
            data: err
        })
    })
}

// Delete One post
exports.deletePost = (req, res) => {
    Post.findByIdAndRemove(req.params.id).exec((err, data) => {
        if(!err) return res.status(200).json({
            status: 'success',
            data
        })
        res.status(404).json({
            status: 'fail',
            data: err
        })
    })
}
  