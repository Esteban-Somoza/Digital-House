const fs = require('fs');
let tarea1 = {};
let tarea2 = {};
let tarea3 = {};

tarea1.titulo = "Repasar javascript";
tarea1.estado = "Completar";

tarea2.titulo = "Hacer una app de tareas";
tarea2.estado = "En proceso"

tarea3.titulo = "Break";
tarea3.estado = "Pendiente"

let tareas = [tarea1, tarea2, tarea3];
let tareasjson = JSON.stringify (tareas,null,2);


fs.writeFileSync ("tareas.json", tareasjson);
