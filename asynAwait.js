async function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout((function(){
            console.log('Hola ' + nombre);
            resolve(nombre);
        }),1000);
    })
};

async function conversa(nombre){
    return new Promise ((resolve, reject) => {
        setTimeout((function(){
            console.log('Bla bla blaaa...');
            resolve(nombre);
        }),1000);
        
    })
    
};

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bye ', nombre);
            resolve(nombre);
        },1000);
        
    });
    
    
};

(async function main(){
    let nombre = await hola('Camilo');
    await conversa();
    await conversa();
    await adios(nombre);

})();