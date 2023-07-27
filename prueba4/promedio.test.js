const promedio = require('./promedio');

test('el area de un circulo con radio de 5 es= ', () => {
    expect(promedio(5,5,5)).toBe(5);
  });