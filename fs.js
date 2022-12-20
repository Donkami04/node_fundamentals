const fs = require('fs');

function leer(ruta,cb){
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    });
};

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function (err){
        if(err) 
            console.log('Ha ocurrido un error, ', err)
            else {
                console.log('Se ha escrito correctamente');
            }
    })
};

function borrar(ruta, cb){
    fs.unlink(ruta, cb)
};

// escribir(__dirname + '/archivoNuevo.txt', 'Hola papi, me acabaste de crear 7u7', console.log);
// leer(__dirname + '/archivoNuevo.txt', console.log);
borrar(__dirname + '/archivoNuevo.txt', console.log);