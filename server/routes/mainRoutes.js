const router = require('express').Router();

const { restricted } = require('../controllers/userController');

router
  .route('/restricted')
  .get(restricted)

module.exports = router;