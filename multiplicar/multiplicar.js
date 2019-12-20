/**
 * Requireds
 */
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let datos = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        console.log('============================'.green);
        console.log(`tabla de ${base}`.green);
        console.log('============================'.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }

        resolve(`Finalizo tabla`);
    });

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        let datos = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            datos += `${base} * ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}