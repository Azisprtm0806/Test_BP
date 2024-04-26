const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const update = require("./update");
const getAllPelanggan = require("./getAllPelanggan");
const getPelanggan = require("./getPelanggan");

module.exports = {
  register,
  login,
  update,
  getAllPelanggan,
  getPelanggan,
  logout,
};
