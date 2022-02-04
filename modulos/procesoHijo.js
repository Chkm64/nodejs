const { exec, spawn } = require('child_process');

// Listar los directorios en Linux
// exec('ls -la', (err, stdout, sterr)=>{
//     if (err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

let proceso = spawn('ls', ['-la']);
// console.log(proceso);

proceso.stdout.on('data', (dato) => {
    console.log(dato.toString());
});

proceso.on('exit', () => {
    console.log('El proceso terminó');
    console.log(proceso.killed);
});
