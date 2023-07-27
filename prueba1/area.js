//funcion que recibe un radio y retorna el área de un circulo

function area (radio) {
    let areaCirculo= 3.14*radio*radio
    return areaCirculo
    
}
let valorArea= area (5)
console.log ("Area: ", valorArea);

module.exports = area;