const router = require('express').Router();

const userRoutes = require('./userRoutes');
const weatherRoutes = require('./weatherRoutes');
const dbRoutes = require('./dbRoutes');
const fileRoutes = require('./fileRoutes');
const noteRoutes = require('./noteRoutes');
const messageRoutes = require('./messageRoutes');

router.use('/users', userRoutes);
router.use('/weather', weatherRoutes);
router.use('/db', dbRoutes);
router.use('/files', fileRoutes);
router.use('/notes', noteRoutes);
router.use('/messages', messageRoutes);

module.exports = router;