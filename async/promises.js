function hola(nombre) {
	return new Promise(function (resolve, reject) {
		setTimeout(function(){
			console.log('Hola, ' + nombre);
			resolve(nombre);
		}, 1000);
	});
}

function hablar(nombre) {
	return new Promise((resolve,reject) =>{
		setTimeout(function () {
			console.log("Bla bla bla bla");
			resolve(nombre);
			// reject('Error de respuesta')
		}, 1000);
	})
}

function adios(nombre){
	return new Promise((resolve, reject) =>{
		setTimeout(function(){
			console.log('Adios', nombre);
			resolve(nombre);
		});
	});
}


console.log('Iniciando el proceso');
hola('José')
	.then(hablar)
	.then(hablar)
	.then(adios)
	.then((nombre) => {
		console.log('Terminando el proceso ' + nombre);
	})
	.catch(error => {
		console.error('Hemos encontrado un error');
		console.error(error);
	})