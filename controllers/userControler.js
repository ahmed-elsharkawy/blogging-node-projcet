const User = require('./../models/userModel');


// // Get all users
exports.getAllUsers = (req, res) => {
    User.find({}).exec((err, data) => {
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

// Create one user
exports.createuser = (req, res) => {
    const user = new User(req.body);
    user.save((err, data) => {
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

// Get one user
exports.getOneUser = (req, res) => {
    const id = req.params.id;
    User.findById(id).exec((err, data) => {
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

// Update One user
exports.updateUser = (req, res) => {
    // const id = req.params.id;
    User.findByIdAndUpdate(req.params.id, req.body, {
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

// Delete One user
exports.deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id).exec((err, data) => {
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