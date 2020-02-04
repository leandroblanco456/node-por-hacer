const opciones = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'

    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opciones)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opciones)
    .command('borrar', 'Borra la tarea', opciones)
    .help()
    .argv;


module.exports = {
    argv
}