const area = require('./area');

test('el area de un circulo con radio de 5 es= ', () => {
  expect(area(5)).toBe(78.5);
});