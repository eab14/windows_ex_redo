const router = require('express').Router();
const { userAuth } = require('../utils/auth');

const {
    getUsers,
    getUserById,
    postUser,
    editUser,
    deleteUser,
    loginUser,
    logoutUser,
    verifyUser
} = require('../controllers/userController');

const {
  getFiles,
} = require('../controllers/fileController');

router
  .route('/')
  .get(getUsers)
  .post(postUser);

router
  .route('/verify')
  .get(userAuth, verifyUser);

router
  .route('/edit/:id')
  .put(editUser);

router
  .route('/login')
  .post(loginUser);

router
  .route('/logout')
  .post(userAuth, logoutUser);

router
  .route('/files')
  .get(userAuth, getFiles);

router
  .route('/:id')
  .get(getUserById)
  .delete(deleteUser);

module.exports = router;