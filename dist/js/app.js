Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getHealthStatus = getHealthStatus;
exports.sortHeroesByHealth = sortHeroesByHealth;
const _basic = _interopRequireDefault(require('./basic'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// TODO: write your code here

console.log('worked');
console.log((0, _basic.default)([1, 2]));

/* Во время игры вам необходимо будет
отображать полоску жизни над игровым персонажем.
Для сигнализации пользователю вы решили ввести
цветовую индикацию:
Здоровье более 50 - зелёный;
Здоровье от 50 и до 15 - жёлтый;
Менее 15 - красный. */
function getHealthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  }
  if (character.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
function sortHeroesByHealth(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
