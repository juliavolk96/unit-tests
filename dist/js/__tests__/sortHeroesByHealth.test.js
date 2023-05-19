"use strict";

var _globals = require("@jest/globals");
var _app = require("../app");
(0, _globals.test)('герои отстортированы по уровню здоровья в порядке убывания', () => {
  const heroes = [{
    name: 'мечник',
    health: 10
  }, {
    name: 'маг',
    health: 100
  }, {
    name: 'лучник',
    health: 80
  }];
  const sortedHeroes = (0, _app.sortHeroesByHealth)(heroes);
  (0, _globals.expect)(sortedHeroes).toEqual([{
    name: 'маг',
    health: 100
  }, {
    name: 'лучник',
    health: 80
  }, {
    name: 'мечник',
    health: 10
  }]);
});
(0, _globals.test)('один элемент', () => {
  const heroes = [{
    name: 'маг',
    health: 100
  }];
  const sortedHeroes = (0, _app.sortHeroesByHealth)(heroes);
  (0, _globals.expect)(sortedHeroes).toEqual([{
    name: 'маг',
    health: 100
  }]);
});
(0, _globals.test)('повторяющиеся значения', () => {
  const heroes = [{
    name: 'мечник',
    health: 80
  }, {
    name: 'лучник',
    health: 100
  }, {
    name: 'маг',
    health: 80
  }];
  const sortedHeroes = (0, _app.sortHeroesByHealth)(heroes);
  (0, _globals.expect)(sortedHeroes).toEqual([{
    name: 'лучник',
    health: 100
  }, {
    name: 'мечник',
    health: 80
  }, {
    name: 'маг',
    health: 80
  }]);
});
(0, _globals.test)('пустой массив', () => {
  const heroes = [];
  const sortedHeroes = (0, _app.sortHeroesByHealth)(heroes);
  (0, _globals.expect)(sortedHeroes).toEqual([]);
});
(0, _globals.test)('два элемента, разное здоровье, у второго элемента здоровья больше', () => {
  const heroes = [{
    name: 'мечник',
    health: 80
  }, {
    name: 'лучник',
    health: 100
  }];
  const sortedHeroes = (0, _app.sortHeroesByHealth)(heroes);
  (0, _globals.expect)(sortedHeroes).toEqual([{
    name: 'лучник',
    health: 100
  }, {
    name: 'мечник',
    health: 80
  }]);
});
(0, _globals.test)('два элемента, разное здоровье, у первого элемента здоровья больше', () => {
  const heroes = [{
    name: 'лучник',
    health: 100
  }, {
    name: 'мечник',
    health: 80
  }];
  const sortedHeroes = (0, _app.sortHeroesByHealth)(heroes);
  (0, _globals.expect)(sortedHeroes).toEqual([{
    name: 'лучник',
    health: 100
  }, {
    name: 'мечник',
    health: 80
  }]);
});