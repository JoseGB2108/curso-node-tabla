
const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async(base = 5, hasta = 10, listar = false) => {
      
    try {
    
        let salida = '';
        let salidaC = '';
    
        for ( let i = 1; i <= hasta; i++ ){
    
        salida += (`${base} x ${i} = ${base * i}\n`);
        salidaC += (`${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i}\n`);
    
    }
    if (listar) {
        console.log('======================'.yellow);
        console.log('  Tabla del:'.yellow, colors.blue(base));
        console.log('======================'.yellow);

        console.log(salidaC);
    }
    
    
    fs.writeFileSync (`./salida/tabla-${base}.txt`, salida);
        
    return(`Tabla-${base}.txt`);

    } catch (err) {
        console.log(err);
    }   
    
}

module.exports = {
     crearArchivoTabla
}










