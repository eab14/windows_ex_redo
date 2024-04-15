const router = require('express').Router();
const { userAuth, adminAuth } = require('../utils/auth');

const { getAllFiles } = require('../controllers/fileController');

router
  .route('/')
  .get(getAllFiles);

  module.exports = router;