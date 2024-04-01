const router = require('express').Router()

const {
  getStats
} = require('../controllers/dbController');

router
  .route("/stats")
  .get(getStats);

module.exports = router;