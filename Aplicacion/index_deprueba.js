const fs = require('fs');
const tarea = {}

tarea.titulo = "Tarea de Prueba lol"
tarea.estado = "pendiente"

const tarea2 = {}
tarea2.titulo = "Tarea de Prueba2"
tarea2.estado = "hecho"

const tareas = [tarea,tarea2]
const tareasLiteral = JSON.stringify(tareas,null,2)


fs.writeFileSync ('tareas.json', tareasLiteral)
