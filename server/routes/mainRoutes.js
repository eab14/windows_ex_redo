const router = require('express').Router();
const { withAuth } = require('../utils/auth');

const { restricted } = require('../controllers/userController');

router
  .route('/restricted')
  .get(withAuth, restricted)

module.exports = router;