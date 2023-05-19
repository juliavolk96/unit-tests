"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUser = loadUser;
exports.saveUser = saveUser;
var _http = require("./http");
function loadUser(id) {
  const data = (0, _http.httpGet)(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
function saveUser(user) {
  throw new Error('Unimplemented');
}