const router = require('express').Router()

const {
  getAllEaster
} = require('../controllers/eeController');

router
  .route("/")
  .get(getAllEaster);

module.exports = router;