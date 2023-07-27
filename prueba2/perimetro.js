function perimetro(radio) {
  let perimetroCirculo = 2*3.14*radio 
  return perimetroCirculo
}
let valor= perimetro(5)
console.log ("Perimetro: ", valor);

module.exports = perimetro;