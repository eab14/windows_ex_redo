const router = require('express').Router();

const userRoutes = require('./userRoutes');
const weatherRoutes = require('./weatherRoutes');
const dbRoutes = require('./dbRoutes');
const fileRoutes = require('./fileRoutes');

router.use('/users', userRoutes);
router.use('/weather', weatherRoutes);
router.use('/db', dbRoutes);
router.use('/files', fileRoutes);

module.exports = router;