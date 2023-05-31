const router = require('express').Router();
const userRoutes = require('./users');
const reactionRoutes = require('./reactions');
const thoughtRoutes = require('./thoughts');
const friendRoutes = require('./friends');


router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use(friendRoutes);
router.use(reactionRoutes);

module.exports = router;