const router = require('express').Router();
const { userAuth, adminAuth } = require('../utils/auth');

const { getAllNotes } = require('../controllers/noteController');

router
  .route('/')
  .get(userAuth, adminAuth, getAllNotes);

  module.exports = router;