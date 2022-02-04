function otraFuncion(){
    seRompe();
}

function seRompe(){
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error("Error en la funcion asincrona");
            cb(error);
        }
    }, 1000);
}

try {
    // otraFuncion();
    seRompeAsincrona((err)=>{
        console.log(err.message)
    });
} catch (error) {
    console.error('Vaya, algo se ha roto');
    console.error(error.message);
    //console.error(error);
}

console.log('Fin del proceso');