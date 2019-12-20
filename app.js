/**
 * Requireds
 */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');


// console.log(process.argv);
//let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
console.log('Base ', argv.base);
console.log('Limite ', argv.limite);

let comando = argv._[0];

let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(base, limite)
            .then(() => console.log(`Tabla creado`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(base, limite)
            .then(archivo => console.log('Archivo creado ' + `${archivo}`.green))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}