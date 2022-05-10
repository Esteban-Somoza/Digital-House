const fs = require('fs')
const admin = (accion, tareas) => {
    switch (accion) {
        case "listar":
            // for (let index = 0; index < tareas.length; index++) {
            //     const tarea = tareas[index];
            //     console.log(tarea);
            // } 
            // break;
            tareas.forEach((element) => {
                console.log(element);
            });
            break;
        case "crear":
            let titulo = process.argv[3];
            let nuevaTarea = {
                titulo: titulo,
                estado: 'Pendiente'
            }
            tareas.push(nuevaTarea);
            fs.writeFileSync('tareas.json', JSON.stringify(tareas, null, 2));
            break;
        case undefined:
            console.log("Atención - Tienes que pasar una acción.")
        case 'filtrar':
            let estadoInterno = process.argv[3];
            let tareasEstado = tareas.filter(elemento => estadoInterno == elemento.estado);
            tareasEstado.forEach(elemento => console.log(elemento.titulo, elemento.estado));
            break;
        case 'actualizar':
            let tareaIndice = parseInt(process.argv[3]);
            let tareaNuevoEstado = process.argv[4];
            let tareasActualizadas = tareas.map((elemento, indice) => indice === tareaIndice ? Object({ ...elemento, estado: tareaNuevoEstado }) : elemento);
            fs.writeFileSync('tareas.json', JSON.stringify(tareasActualizadas, null, 2));
            break;

        case 'mostrar':
            let tareaIndiceMostrar = parseInt(process.argv[3]);
            let tareaMostrar = tareas.find((elemento, indice) => indice === tareaIndiceMostrar);
            console.log(tareaMostrar);
            break;
        default:
            console.log("No entiendo qué quieres hacer.")

    }
}
module.exports = admin
