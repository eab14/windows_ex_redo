const router = require('express').Router();

const mainRoutes = require('./mainRoutes');
const userRoutes = require('./userRoutes');
const weatherRoutes = require('./weatherRoutes');

router.use('/', mainRoutes);
router.use('/users', userRoutes);
router.use('/weather', weatherRoutes);
module.exports = router;