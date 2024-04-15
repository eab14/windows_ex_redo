const router = require('express').Router();
const { userAuth, adminAuth } = require('../utils/auth');

const { getAllNotes, deleteNote } = require('../controllers/noteController');

router
  .route('/')
  .get(userAuth, adminAuth, getAllNotes);

router
  .route('/:id')
  .delete(userAuth, adminAuth, deleteNote);

module.exports = router;