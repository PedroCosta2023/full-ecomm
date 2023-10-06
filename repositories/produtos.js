const fs = require("fs");
const crypto = require("crypto");

const Repository = require("./repository");

class ProductRepository extends Repository {
  apenasProduto(){}
}

module.exports = new ProductRepository("products.json");