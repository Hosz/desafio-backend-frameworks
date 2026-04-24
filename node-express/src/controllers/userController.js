const userService = require('../services/userService');

function listUsers(req, res) {
  const users = userService.listUsers();

  return res.json(users);
}

function getExampleUser(req, res) {
  const user = userService.getExampleUser();

  return res.json(user);
}

module.exports = {
  listUsers,
  getExampleUser
};
