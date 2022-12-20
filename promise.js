function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout((function(){
            console.log('Hola ' + nombre);
            resolve(nombre);
        }),1000);
    })
};

function conversa(nombre){
    return new Promise ((resolve, reject) => {
        setTimeout((function(){
            console.log('Bla bla blaaa...');
            resolve(nombre);
        }),1000);
        
    })
    
};

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bye ', nombre);
            resolve(nombre);
        },1000);
        
    });
    
    
};

console.log('Iniciando...');

hola('Camilo')
    .then(conversa)
    .then(adios)
    .then((nombre) => {console.log('conversacion finalizada con '+ nombre)});