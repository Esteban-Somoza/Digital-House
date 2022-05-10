let fechaActual = new Date(2094,1,3);

let anio = fechaActual.getFullYear()
let month = fechaActual.getMonth()
let dia = fechaActual.getDate()

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


console.log ("Hoy es el " + dia + " de " + meses [month] + " de " + anio)

//console.log (fechaActual.getDate())
