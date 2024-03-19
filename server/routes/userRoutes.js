const router = require('express').Router();
const { withAuth } = require('../utils/auth');

const {
    getUsers,
    getUserById,
    postUser,
    editUser,
    deleteUser,
    loginUser,
    logoutUser,
} = require('../controllers/userController');

router
  .route('/')
  .get(getUsers)
  .post(postUser);

router
  .route('/:id')
  .get(getUserById)
  .delete(withAuth, deleteUser)

router
  .route('/edit/:id')
  .put(withAuth, editUser)

router
  .route('/login')
  .post(loginUser)

router
  .route('/logout')
  .post(withAuth, logoutUser)

module.exports = router;