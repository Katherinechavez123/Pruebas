const numeroAleatorio = require('./numeroAleatorio.js')

test('Generación de número aleatorio', () => {
    const num = numeroAleatorio(1, 10);
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(10);
  });