const router = require('express').Router();
const { userAuth, adminAuth } = require('../utils/auth');

const { getAllMessages } = require('../controllers/messageController');

router
  .route('/')
  .get(userAuth, adminAuth, getAllMessages);

  module.exports = router;