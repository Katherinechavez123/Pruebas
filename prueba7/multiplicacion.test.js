const multiplicar = require('./multiplicacion');

test('El resultado de 3 * 4 es = 12', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });
  