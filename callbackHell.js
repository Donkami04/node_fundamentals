function hola(nombre, miCallback){
    setTimeout((function(){
        console.log('Hola ' +nombre);
        miCallback(nombre);
    }),1000);
    
};

function conversa(callbackConversa){
    setTimeout(function(){
        console.log('Bla bla blaaa...');
        callbackConversa();
    },1000);
};

function adios(nombre, otroCallback){
    setTimeout((function(){
        console.log('Bye '+ nombre);
        otroCallback();
    }),1000);
    
};

hola('Camilo', function(nombre){
    conversa(function(){
        conversa(function(){
            adios(nombre, function(){
                console.log('Termino la conversa');
            })
        })
    })
});