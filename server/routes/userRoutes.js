const router = require('express').Router();
const { userAuth, adminAuth } = require('../utils/auth');

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

const { getFiles } = require('../controllers/fileController');
const { getMessages } = require('../controllers/messageController');
const { getNotes } = require('../controllers/noteController');

router
  .route('/')
  .get(userAuth, adminAuth, getUsers)
  .post(postUser);

router
  .route('/verify')
  .get(userAuth, verifyUser);

router
  .route('/edit/:id')
  .put(userAuth, editUser);

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
  .route('/messages')
  .get(userAuth, getMessages);

router
  .route('/notes')
  .get(userAuth, getNotes);

  // Maybe not the right function name >.>
// router
//   .route('/delete')
//   .get(userAuth, deleteSelf);

router
  .route('/:id')
  .get(userAuth, adminAuth, getUserById)
  .delete(userAuth, adminAuth, deleteUser);

module.exports = router;