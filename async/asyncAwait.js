async function hola(nombre) {
	return new Promise(function (resolve, reject) {
		setTimeout(function(){
			console.log('Hola, ' + nombre);
			resolve(nombre);
		}, 1000);
	});
}

async function hablar(nombre) {
	return new Promise((resolve,reject) =>{
		setTimeout(function () {
			console.log("Bla bla bla bla");
			resolve(nombre);
			// reject('Error de respuesta')
		}, 1000);
	})
}

async function adios(nombre){
	return new Promise((resolve, reject) =>{
		setTimeout(function(){
			console.log('Adios', nombre);
			resolve();
		});
	});
}

async function main(){
	let nombre = await hola('José');
	await hablar();
	await hablar();
	await adios(nombre);
	console.log('Terminamos el proceso');
}
console.log('Empezamos el proceso');
main();
