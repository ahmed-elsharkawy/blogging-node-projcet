const express = require('express');
const router = express.Router();
const userControler = require('./../controllers/userControler');
const { route } = require('./posts');


router
  .route("/")
  .get(userControler.getAllUsers)
  .post(userControler.createuser);

  router
  .route('/:id')
  .get(userControler.getOneUser)
  .patch(userControler.updateUser)
  .delete(userControler.deleteUser)

module.exports = router;