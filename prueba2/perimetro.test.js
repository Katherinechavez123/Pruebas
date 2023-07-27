const perimetro = require('./perimetro');

test('el perimetro de un circulo con radio de 5 es= ', () => {
  expect(perimetro(5)).toBe(31.400000000000002);
});