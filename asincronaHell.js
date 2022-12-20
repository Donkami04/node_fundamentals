function soyAsincrona(otraFuncion){
    setTimeout((function(){
        console.log('Soy primero');
        otraFuncion();
    }),2000);
    
};

console.log('Soy segundo');

soyAsincrona(function(){
    console.log('Soy tercero');
});

// Soy segundo
// Soy primero
// Soy tercero