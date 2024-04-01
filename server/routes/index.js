const router = require('express').Router();

const userRoutes = require('./userRoutes');
const weatherRoutes = require('./weatherRoutes');
const dbRoutes = require('./dbRoutes');

router.use('/users', userRoutes);
router.use('/weather', weatherRoutes);
router.use('/db', dbRoutes);

module.exports = router;