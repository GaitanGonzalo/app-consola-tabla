//PAQUETES Y REQUIRES
const fs = require('fs');
const clrs = require('colors');

//FUNCIONES
const multiplicar = async (a, l, h) => {
//par captar un error AL USAR ASYNC tengo que usar un try
    try {
        let salida  ='';
        let consola = '';
        for (let i = 1; i <= h; i++) {
            
            salida += `${a} X ${i} = ${a * i}\n`;
            consola += `${clrs.yellow(a)} X ${clrs.yellow(i)} = ${a * i}\n`;
        }
        
        if(l){
            console.log('=================='.green);
            console.log('    Tabla del :'.green, clrs.yellow(a));
            console.log('=================='.green);
            console.log(consola);
        }
    
        // fs.writeFile(`tabla-${a}.txt`, salida, (err)=>{
        //     if(err) throw err;
    
        //     console.log(`tabla-${a}.txt creada`);
        // })
        
        fs.writeFileSync(`./salida/tabla-${a}.txt`, salida);

        return`tabla-${a}.txt`;

    } catch (error) {
         throw error;
    }
};

module.exports = {
    multiplicar
}