const http = require('http');

http.createServer(function (req, res){
    console.log('nueva peticion!'); // con esto solo logueamos que hay una peticion nueva
    console.log(req.url); //con esto traemos de la request lo que nos piden, en este caso sera la url

    res.writeHead(201, {'Conten-type': 'text/plain'}) //201 "Creado"

    //Esto es lo que vera el usuario en respuesta a su req
    res.write('Hola,ya se usar http de NodeJS')

    res.end();
// para que esto sirva necesitamos un puerto con .liste() al fina edel http.createServer
}).listen(3000)//puerto 3000

//buena practica poner un log y decir de donde esta escuchando
console.log('Escuchando http en el puerto 3000');