const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limte: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Crea el archivo de la tabla de multiplicar', opts)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}