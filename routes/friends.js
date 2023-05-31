const router = require('express').Router();
const friend = require('../controllers/index').friendMethods;

router.route('/users/:userId/friends/:friendId').post(friend.updateFriend).delete(friend.deleteFriend)

module.exports = router;