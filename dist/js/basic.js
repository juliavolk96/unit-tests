"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sum;
//исправила из-за error
function sum(items) {
  return items.reduce((total, item) => total + item, 0);
}