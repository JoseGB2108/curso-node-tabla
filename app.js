
const {crearArchivoTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');




console.clear();


// const [,,arg3 = 'base=5'] = process.argv;
// const [, base=5] = arg3.split('=');
// console.log(base);

// const base = 7;

crearArchivoTabla (argv.b, argv.h, argv.l)
        .then( nombreArchivo => console.log( nombreArchivo, 'creado') )
        .catch( err => console.log( err ));
    

    
// npm //
//npm init para crear el package.json
//npm run "  " para ejecutar algun "scripts"
//npm install colors para instalar el colors
//npm install nodemon --save-dev para instalarlo solamente para desarrollo
//npm uninstall nodemon para desisntalar el paquete
//npm install colors@1.0.0 para instalar una version especifica que puede ser anterior
//npm update para actualizar las dependencias



//git
//git init
//git add .
//git commit -m "primer commit" para salvar
//git checkout -- . para reconstruir












