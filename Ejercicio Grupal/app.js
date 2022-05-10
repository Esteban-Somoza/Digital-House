let matthewMccrea = require('./matthewMccrea');
let esteban = require('./estebanSomoza');
let luciano = require('./lucianoRey');

var datos= [matthewMccrea, esteban, luciano];

for (var i = 0; i < datos.length; i++) {
    var persona= datos[i];
    var nombre= persona[0];
    var hobby= persona[1];
    var ubicacion= persona[2];
    var text = "Hola, soy "+nombre+", disfruto " +hobby+" y soy de "+ubicacion
    console.log (text)
    
}
