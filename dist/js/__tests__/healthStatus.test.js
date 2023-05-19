const _globals = require('@jest/globals');
const _app = require('../app');

(0, _globals.test)('функция возвращает "healthy", когда значение "health" больше 50', () => {
  const character = {
    name: 'Mar',
    health: 90,
  };
  const result = (0, _app.getHealthStatus)(character);
  (0, _globals.expect)(result).toBe('healthy');
});
(0, _globals.test)('функция возвращает "wounded", когда значение "health" находится в диапазоне от 50 до 15', () => {
  const character = {
    name: 'Mar',
    health: 30,
  };
  const result = (0, _app.getHealthStatus)(character);
  (0, _globals.expect)(result).toBe('wounded');
});
(0, _globals.test)('функция возвращает "critical", когда значение "health" меньше 15', () => {
  const character = {
    name: 'Mar',
    health: 10,
  };
  const result = (0, _app.getHealthStatus)(character);
  (0, _globals.expect)(result).toBe('critical');
});
