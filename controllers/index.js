// this is importing methods and exporting them
const thoughtMethods = require('./thoughts');
const userMethods = require('./users');
const reactMethods = require('./thought-react');
const friendMethods = require('./users-friends');

module.exports = { userMethods, thoughtMethods, friendMethods, reactMethods }