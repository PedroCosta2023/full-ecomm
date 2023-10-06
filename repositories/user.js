const fs = require("fs");
const crypto = require("crypto");

const Repository = require("./repository");

class UserRepository extends Repository {

  apenasUser(){}
}

module.exports = new UserRepository("users.json");
