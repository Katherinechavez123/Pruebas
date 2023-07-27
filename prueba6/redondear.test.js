const redondear = require('./redondear');
test('Redondeo de 3.7 es 4', () => {
    expect(redondear(3.7)).toBe(4);
  });
  