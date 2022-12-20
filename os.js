const os  = require('os');//modulo sistema operativo

console.log(os.arch());//ver arquitectura de la maquina
console.log(os.platform());//nos dice en que SO estamos, windows, linux, ubuntu, etc.
console.log(os.cpus());//muestra la informacion de la cpu