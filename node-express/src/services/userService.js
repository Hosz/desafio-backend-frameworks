const User = require('../models/userModel');

const users = [
  new User(1, 'Murilo Henrique', 'murilo@email.com'),
  new User(2, 'Ana Silva', 'ana@email.com')
];

function listUsers() {
  return users;
}

function getExampleUser() {
  return users[0];
}

module.exports = {
  listUsers,
  getExampleUser
};
